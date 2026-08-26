/**
 * cases.js — EDITE AQUI para adicionar/remover/alterar cases
 *
 * Campos disponíveis por case:
 *   title       (string)  — Título do case
 *   client      (string)  — "Cliente · Ano"
 *   category    (string)  — "design" | "video" | "digital"
 *   tag         (string)  — Texto do badge no card (ex: "Campanha")
 *   desc        (string)  — Descrição curta no card
 *   fullDesc    (string)  — Texto completo no modal
 *   thumb       (string)  — Caminho da imagem de capa (ex: "img/case1-thumb.jpg")
 *   images      (array)   — Lista de imagens extras no modal (opcional)
 *   videoUrl    (string)  — URL embed YouTube/Vimeo (opcional)
 *                           YouTube: "https://www.youtube.com/embed/ID_DO_VIDEO"
 *                           Vimeo:   "https://player.vimeo.com/video/ID_DO_VIDEO"
 *   pdfUrl      (string)  — URL ou caminho do PDF para download (opcional)
 *   pdfLabel    (string)  — Texto do botão de PDF (padrão: "Baixar apresentação")
 */

const CASES = [
        {
    title: "Perfil da Imprensa Regional",
    client: "SECOM · 2026",
    category: "digital",
    tag: "Digital",
    desc: "plataforma digital interativa que reúne os principais veículos da imprensa regional",
    fullDesc: "O projeto foi idealizado e desenvolvido pela equipe, que atuou desde a definição do conceito e da experiência de navegação até a criação da identidade visual e o desenvolvimento da plataforma. O trabalho incluiu a integração dos dados, a construção do mapa interativo e a implementação de recursos de busca, filtros e navegação.",
    thumb: "img/mockup12.jpg",
    images: [
      "img/mockup12.jpg",
      "img/mockup13.jpg"
    ],
    videoUrl: "https://youtu.be/SFgHIeEnr4U",
    credits: "Idealização, design e desenvolvimento: Júlia Oliveira Créditos vídeo: Edição - Diego Campos / <br> Animação: Júlia Oliveira",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
    {
    title: "4ª Semana Brasileira de Educação Midiática",
    client: "SECOM · 2026",
    category: "digital",
    tag: "Digital",
    desc: "Breve descrição do projeto para exibição no grid de cases.",
    fullDesc: "Descrição completa do case para o modal. Explique o desafio, a solução criativa adotada e os resultados alcançados.",
    thumb: "img/mockup26.gif",
    images: [
      "img/mockup25.gif",
      "img/mockup31.jpg",
      "img/mockup32.jpg"
    ],
    videoUrl: "",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
  {
    title: "Crianças, Adolescentes e Telas",
    client: "SECOM · 2024",
    category: "design",
    tag: "Design",
    desc: "Concepção gráfica e diagramação do material.",
    fullDesc: "A equipe foi responsável pelo projeto gráfico e pela diagramação da publicação, desenvolvendo uma linguagem visual clara, acolhedora e acessível para transformar conteúdos informativos em uma experiência de leitura mais intuitiva. O resultado foi uma publicação visualmente consistente, capaz de aproximar o tema do uso de dispositivos digitais do cotidiano de famílias, educadores e jovens.",
    thumb: "img/mockup1.jpg",
    thumbModal: "img/mockup3.jpg",
    images: [
      "img/mockup3.jpg",
      "img/mockup4.jpg",
      "img/mockup1.jpg"
    ],
    videoUrl: "",
    credits: "Projeto gráfico e diagramação: Júlia Oliveira · Ilustrações: Elder Galvão",
    pdfUrl: "https://www.gov.br/secom/pt-br/assuntos/uso-de-telas-por-criancas-e-adolescentes/guia/guia-de-telas_sobre-usos-de-dispositivos-digitais_versaoweb.pdf",
    pdfLabel: "Baixar Guia",
  },
  {
    title: "Vídeo 5ª Conferência Nacional de Políticas para as Mulheres",
    client: "Ministério das Mulheres · 2026",
    category: "video", 
    tag: "Vídeo",
    desc: "Edição de vídeo e Motion Graphics",
    fullDesc: "A equipe foi responsável pela edição do vídeo institucional da 5ª Conferência Nacional de Políticas para as Mulheres, desenvolvendo uma narrativa audiovisual dinâmica e alinhada à importância do evento. O trabalho envolveu a seleção e organização do material bruto, edição de imagens, tratamento de áudio, criação de trilha narrativa e desenvolvimento de elementos de motion design para reforçar mensagens-chave, dados e identidade visual da conferência. A combinação entre edição de vídeo e animações gráficas permitiu traduzir a diversidade de debates, propostas e participações em um conteúdo envolvente, acessível e visualmente atrativo, fortalecendo a comunicação dos resultados e da relevância da conferência para o avanço das políticas públicas voltadas às mulheres.",
    thumb: "img/gif1.gif",
    images: [],
    videoUrl: "https://www.youtube.com/embed/53lzU2XnzIQ",
    credits: "Edição e Montagem: Diego Campos · <br> Motion: Júlia Oliveira",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
  },
  {
    title: "COP 27",
    client: "SECOM · 2022",
    category: "design",
    tag: "Design",
    desc: "Case vencedor do Inspira 2023",
    fullDesc: "A equipe atuou de forma integrada na idealização, criação e produção dos materiais de comunicação da COP27, desenvolvendo mais de 30 entregas em português e inglês. O trabalho envolveu a criação e diagramação de materiais de apoio às autoridades, factsheets para a imprensa, apresentações, documentos, cards para redes sociais, além da produção e edição de vídeos e animações.",
    thumb: "img/mockup16.jpg",
    images: [
      "img/mockup14.jpg",
      "img/mockup15.jpg",
    ],
    videoUrl: "https://youtu.be/M0iSx6i2QxY",
    credits: "Direção de arte: Júlia Oliveira <br> Design de apoio: Wagner <br> Motion: Guto Rodrigues ",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
  },
  {
    title: "Vídeo ANPD",
    client: "SECOM · 2026",
    category: "video",
    tag: "Vídeo",
    desc: "Breve descrição do projeto para exibição no grid de cases.",
    fullDesc: "Descrição completa do case para o modal. Explique o desafio, a solução criativa adotada e os resultados alcançados.",
    thumb: "img/mockup20.gif",
    images: [],
    videoUrl: "",
    credits: "Edição de vídeo: Diego Campos <br> Animação: Alex Severino",
    pdfUrl: "pdfs/case5.pdf",
    pdfLabel: "Baixar apresentação"
  },
  {
    title: "Balanço Semanal de Imprensa",
    client: "SECOM · 2025",
    category: "design",
    tag: "design",
    desc: "Breve descrição do projeto para exibição no grid de cases.",
    fullDesc: "Descrição completa do case para o modal. Explique o desafio, a solução criativa adotada e os resultados alcançados.",
    thumb: "img/mockup17.jpg",
    images: [
      "img/mockup18.jpg",
      "img/mockup19.jpg",
    ],
    videoUrl: "",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
  },
  {
      title: "Olímpiadas Paris 2024",
    client: "SECOM · 2024",
    category: "identidade",
    tag: "Identidade Visual",
    desc: "Série de infográficos",
    fullDesc: "Criação da identidade visual e de uma série de infográficos para a cobertura da participação brasileira nos Jogos Olímpicos e Paralímpicos de Paris 2024. Ao longo do projeto, foram desenvolvidos mais de 20 infográficos em português, inglês e espanhol, produzidos para ilustrar e complementar as matérias publicadas pela Secom no portal Gov.br.",
    thumb: "img/mockup21.jpg",
    images: [
      "img/mockup22.jpg",
      "img/mockup23.jpg",
      "img/mockup24.jpg"

    ],
    videoUrl: "",
    credits: "Idealização e criação da marca: Júlia Oliveira <br> Identidade Visual e design: Daniel Bife",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
    
    {
      title: "Prêmio Bruno e Dom",
    client: "SECOM · 2026",
    category: "identidade",
    tag: "Identidade Visual",
    desc: "Breve descrição do projeto para exibição no grid de cases.",
    fullDesc: "Descrição completa do case para o modal. Explique o desafio, a solução criativa adotada e os resultados alcançados.",
    thumb: "img/case6-thumb.jpg",
    images: [],
    videoUrl: "",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
    {
    title: "Cop30",
    client: "SECOM · 2025",
    category: "digital",
    tag: "Digital",
    desc: "Atuação na gestão, atualização e organização dos conteúdos do site oficial da COP30.",
    fullDesc: "Na COP30, a equipe atuou na comunicação digital, com foco no gerenciamento, na atualização e na organização dos conteúdos do site oficial do evento. Entre as atividades desenvolvidas estiveram a publicação de notícias em diferentes idiomas, a criação e atualização de páginas e a disponibilização de conteúdos institucionais, contribuindo para organizar e tornar acessíveis ao público as informações produzidas ao longo da COP.",
    thumb: "img/mockup27.jpg",
    images: [
      "img/mockup29.jpeg",
      "img/mockup30.jpeg",
      "img/mockup28.jpg"
    ],
    videoUrl: "",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
    {
      title: "Pacto contra o feminicídio",
    client: "SECOM · 2026",
    category: "identidade",
    tag: "Identidade Visual",
    desc: "Breve descrição do projeto para exibição no grid de cases.",
    fullDesc: "Descrição completa do case para o modal. Explique o desafio, a solução criativa adotada e os resultados alcançados.",
    thumb: "img/mockup38.jpg",
    images: [],
    videoUrl: "",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
    {
      title: "Landing Page: Crianças Adolescentes e Telas",
    client: "SECOM · 2026",
    category: "digital",
    tag: "Digital",
    desc: "Breve descrição do projeto para exibição no grid de cases.",
    fullDesc: "Descrição completa do case para o modal. Explique o desafio, a solução criativa adotada e os resultados alcançados.",
    thumb: "img/mockup36.jpg",
    images: [
      "img/mockup36.jpg",
      "img/mockup37.jpg"
    ],
    videoUrl: "",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
    {
      title: "Coleção Educação Midiática",
    client: "SECOM · 2026",
    category: "digital",
    tag: "Digital",
    desc: "Breve descrição do projeto para exibição no grid de cases.",
    fullDesc: "Descrição completa do case para o modal. Explique o desafio, a solução criativa adotada e os resultados alcançados.",
    thumb: "img/case6-thumb.jpg",
    images: [],
    videoUrl: "",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
    {
      title: "Infográficos Interativos",
    client: "SECOM · 2026",
    category: "digital",
    tag: "Digital",
    desc: "Breve descrição do projeto para exibição no grid de cases.",
    fullDesc: "Descrição completa do case para o modal. Explique o desafio, a solução criativa adotada e os resultados alcançados.",
    thumb: "img/mockup33.gif",
    hideModalImage: true,
    images: [
      "img/mockup35.gif",
      "img/mockup34.gif"
    ],
    videoUrl: "",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
    {
    title: "Do Lado do Povo Brasileiro",
    client: "SECOM · 2026",
    category: "digital",
    tag: "Digital",
    desc: "Breve descrição do projeto para exibição no grid de cases.",
    fullDesc: "Descrição completa do case para o modal. Explique o desafio, a solução criativa adotada e os resultados alcançados.",
    thumb: "img/case6-thumb.jpg",
    images: [],
    videoUrl: "",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
    
    
      
];
