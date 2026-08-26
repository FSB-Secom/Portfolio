# Portfólio FSB Comunicação

Site estático para apresentação de cases de design/audiovisual, hospedado gratuitamente no **GitHub Pages**.

---

## Estrutura de arquivos

```
portfolio/
├── index.html          ← estrutura da página
├── css/
│   └── style.css       ← todo o visual
├── js/
│   ├── cases.js        ← ✏️ EDITE AQUI: dados dos cases e equipe
│   └── main.js         ← lógica (filtros, modal, renderização)
├── img/
│   └── (suas imagens)  ← adicione aqui as fotos dos cases e equipe
└── pdfs/
    └── (seus PDFs)     ← adicione aqui os arquivos para download
```

---

## Como editar os cases

Abra o arquivo `js/cases.js`. Cada case é um objeto dentro do array `CASES`. Edite os campos:

| Campo | O que fazer |
|-------|-------------|
| `title` | Título do case |
| `client` | "Nome do cliente · Ano" |
| `category` | `"campanha"`, `"identidade"`, `"video"` ou `"digital"` |
| `tag` | Texto do badge colorido (ex: `"Campanha"`) |
| `desc` | Texto curto exibido no card |
| `fullDesc` | Texto completo exibido no modal |
| `thumb` | Caminho da imagem de capa (ex: `"img/case1.jpg"`) |
| `images` | Lista de imagens extras no modal (pode ser `[]` vazia) |
| `videoUrl` | URL embed do YouTube ou Vimeo (deixe `""` se não tiver) |
| `pdfUrl` | Caminho do PDF para download (ex: `"pdfs/case1.pdf"`) |

### Como adicionar um novo case

Copie um bloco existente e cole antes do `]` final, separando por vírgula:

```js
{
  title: "Meu Novo Case",
  client: "Prefeitura de Brasília · 2025",
  category: "campanha",
  tag: "Campanha",
  desc: "Resumo curto para o card.",
  fullDesc: "Descrição completa para o modal.",
  thumb: "img/novo-case-thumb.jpg",
  images: ["img/novo-case-a.jpg"],
  videoUrl: "",
  pdfUrl: "",
  pdfLabel: "Baixar apresentação"
},
```

### Como adicionar um vídeo do YouTube

1. Acesse o vídeo no YouTube
2. Clique em **Compartilhar → Incorporar**
3. Copie apenas o ID do vídeo (parte depois de `embed/`)
4. Cole assim: `videoUrl: "https://www.youtube.com/embed/SEU_ID_AQUI"`

---

## Como adicionar imagens

1. Coloque seus arquivos JPG/PNG dentro da pasta `img/`
2. Nomeie de forma organizada (ex: `case1-thumb.jpg`, `case1-a.jpg`)
3. Referencie no `cases.js` usando o caminho relativo: `"img/case1-thumb.jpg"`

Tamanho recomendado para a thumb: **800×500 px**

---

## Como editar a equipe

No arquivo `index.html`, procure a seção `<!-- SEÇÃO EQUIPE -->`.

Para cada membro, edite:
- `src` da `<img>` → coloque a foto em `img/` e atualize o caminho
- `class="team-card__avatar-fallback"` → iniciais do nome (ex: `JD`)
- `team-card__name` → nome completo
- `team-card__role` → cargo

---

## Como publicar no GitHub Pages (gratuito)

1. Crie uma conta em [github.com](https://github.com) se ainda não tiver
2. Crie um repositório novo (ex: `portfolio-fsb`)
3. Faça upload de todos os arquivos desta pasta
4. No repositório, vá em **Settings → Pages**
5. Em "Branch", selecione `main` e clique em **Save**
6. Aguarde ~2 minutos. Seu site estará em:
   `https://SEU_USUARIO.github.io/portfolio-fsb/`

---

## Personalizações rápidas no CSS

Abra `css/style.css` e procure estas variáveis para mudar as cores principais:

- `#1b3a6b` → azul institucional (substitua pela cor da marca)
- `#fafaf8` → fundo da página
- `#f2f0ea` → fundo da seção de equipe

---

## Adicionar mais categorias de filtro

No `index.html`, dentro de `.filters-bar__inner`, adicione um botão:
```html
<button class="filter-btn" data-filter="minha-categoria">Minha Categoria</button>
```
E nos cases do `cases.js`, use `category: "minha-categoria"`.
