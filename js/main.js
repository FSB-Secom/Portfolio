/* main.js — Lógica do portfólio */

(function () {

  /* ============================================================
     1. RENDERIZA CARDS A PARTIR DO ARRAY CASES
  ============================================================ */
  const grid = document.getElementById('casesGrid');

  if (grid && typeof CASES !== 'undefined') {
    grid.innerHTML = '';

    CASES.forEach(function (c, i) {
      const article = document.createElement('article');
      article.className = 'case-card';
      article.setAttribute('data-category', c.category);
      article.setAttribute('data-index', i);
      article.style.animationDelay = (i * 0.06) + 's';

      const thumbMarkup = `
        <div class="case-card__thumb">
          ${c.thumb
            ? `<img src="${c.thumb}" alt="${c.title}" onerror="this.style.display='none'" />`
            : ''}
          <div class="case-card__thumb-fallback">
            <span class="case-card__initial">${String(i + 1).padStart(2, '0')}</span>
          </div>
          <div class="case-card__tag">${c.tag}</div>
        </div>`;

      article.innerHTML = `
        ${thumbMarkup}
        <div class="case-card__body">
          <h2 class="case-card__title">${c.title}</h2>
          <p class="case-card__client">${c.client}</p>
          <p class="case-card__desc">${c.desc}</p>
          ${c.credits ? `<p class="case-card__credits">${c.credits}</p>` : ''}
          <div class="case-card__actions">
            <button class="btn btn--ghost" onclick="openModal(${i})">Ver mais</button>
          </div>
        </div>
      `;

      grid.appendChild(article);
    });
  }


  /* ============================================================
     2. FILTROS
  ============================================================ */
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const cards = document.querySelectorAll('.case-card');

      cards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });


  /* ============================================================
     3. MODAL
  ============================================================ */
  const overlay    = document.getElementById('modalOverlay');
  const closeBtn   = document.getElementById('modalClose');
  const modalMedia = document.getElementById('modalMedia');
  const modalTag   = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalClient = document.getElementById('modalClient');
  const modalDesc   = document.getElementById('modalDesc');
  const modalImages = document.getElementById('modalImages');
  const modalVideo  = document.getElementById('modalVideo');
  const modalIframe = document.getElementById('modalIframe');
  const modalActions = document.getElementById('modalActions');

  // Visualizador de imagens em tela cheia
  const imageViewer = document.createElement('div');
  imageViewer.className = 'image-viewer';
  imageViewer.setAttribute('role', 'dialog');
  imageViewer.setAttribute('aria-modal', 'true');
  imageViewer.setAttribute('aria-label', 'Imagem ampliada');
  imageViewer.innerHTML = `
    <button class="image-viewer__close" type="button" aria-label="Fechar imagem ampliada">✕</button>
    <img class="image-viewer__image" src="" alt="" />
  `;
  document.body.appendChild(imageViewer);

  const viewerImage = imageViewer.querySelector('.image-viewer__image');
  const viewerClose = imageViewer.querySelector('.image-viewer__close');

  function openImageViewer(src, alt) {
    viewerImage.src = src;
    viewerImage.alt = alt || 'Imagem ampliada do case';
    imageViewer.classList.add('open');
    viewerClose.focus();
  }

  function closeImageViewer() {
    imageViewer.classList.remove('open');
    viewerImage.src = '';
  }

  function makeImageExpandable(img) {
    img.classList.add('expandable-image');
    img.setAttribute('role', 'button');
    img.setAttribute('tabindex', '0');
    img.setAttribute('aria-label', 'Ampliar imagem');
    img.addEventListener('click', function () {
      openImageViewer(img.src, img.alt);
    });
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openImageViewer(img.src, img.alt);
      }
    });
  }

  viewerClose.addEventListener('click', closeImageViewer);
  imageViewer.addEventListener('click', function (e) {
    if (e.target === imageViewer) closeImageViewer();
  });

  window.openModal = function (index) {
    const c = CASES[index];
    if (!c) return;

    // Mídia principal
    const modalThumb = c.hideModalImage ? '' : (c.thumbModal || c.thumb);
modalMedia.innerHTML = modalThumb
  ? `<img src="${modalThumb}" alt="${c.title}" />`
  : '';
modalMedia.style.display = modalThumb ? 'block' : 'none';
    const mainImage = modalMedia.querySelector('img');
    if (mainImage) makeImageExpandable(mainImage);

    // Textos
    modalTag.textContent    = c.tag;
    modalTitle.textContent  = c.title;
    modalClient.textContent = c.client;
    modalDesc.textContent   = c.fullDesc || c.desc;

    // Imagens extras
    modalImages.innerHTML = '';
    if (c.images && c.images.length > 0) {
      c.images.forEach(function (src) {
        const img = document.createElement('img');
        img.src = src;
        img.alt = c.title;
        makeImageExpandable(img);
        modalImages.appendChild(img);
      });
    }

    // Vídeo
    if (c.videoUrl) {
      modalIframe.src = c.videoUrl;
      modalVideo.style.display = 'block';
    } else {
      modalIframe.src = '';
      modalVideo.style.display = 'none';
    }

    // Ações (PDF)
    modalActions.innerHTML = '';
    if (c.pdfUrl) {
      const a = document.createElement('a');
      a.href     = c.pdfUrl;
      a.target   = '_blank';
      a.rel      = 'noopener';
      a.className = 'btn btn--primary';
      a.textContent = c.pdfLabel || 'Baixar apresentação';
      modalActions.appendChild(a);
    }

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    closeImageViewer();
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    modalIframe.src = ''; // para o vídeo
  }

  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (imageViewer.classList.contains('open')) {
      closeImageViewer();
    } else {
      closeModal();
    }
  });


  /* ============================================================
     4. MENU HAMBÚRGUER (mobile)
  ============================================================ */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.navbar__links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = navLinks.style.display === 'flex';
      navLinks.style.display = isOpen ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '64px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = '#fff';
      navLinks.style.padding = '16px 24px';
      navLinks.style.borderBottom = '1px solid #e8e6e0';
      navLinks.style.gap = '16px';
      navLinks.style.zIndex = '99';

      if (isOpen) navLinks.style.display = 'none';
    });

    // Fecha ao clicar em link
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.style.display = 'none';
      });
    });
  }

})();
