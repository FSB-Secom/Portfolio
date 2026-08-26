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
    videoUrl: "https://www.youtube.com/embed/SFgHIeEnr4U",
    credits: "Idealização, design e desenvolvimento: Júlia Oliveira Créditos vídeo: Edição - Diego Campos / <br> Animação: Júlia Oliveira",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
    {
    title: "4ª Semana Brasileira de Educação Midiática",
    client: "SECOM · 2026",
    category: "design",
    tag: "Design",
    desc: "Criação da marca e identidade visual",
    fullDesc: "A equipe foi responsável pela criação da marca e da identidade visual da 4ª Semana Brasileira de Educação Midiática, desenvolvendo um sistema gráfico modular, inspirado nos princípios da Bauhaus e construído a partir de formas geométricas e cores primárias. A identidade foi pensada para ser dinâmica e flexível, permitindo diferentes composições e desdobramentos sem perder a unidade visual. O conceito reforça o caráter plural, contemporâneo e educativo do evento, criando uma linguagem capaz de se adaptar aos diferentes formatos e conteúdos da Semana.",
    thumb: "img/mockup26.gif",
    images: [
      "img/mockup25.gif",
      "img/mockup31.jpg",
      "img/mockup32.jpg"
    ],
    videoUrl: "",
    credits: "Criação da marca e animação: Júlia Oliveira · <br> Identidade Visual e aplicação: Wan Chagas ",
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
    videoUrl: "https://www.youtube.com/embed/HAqSF6B667Y",
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
    videoUrl: "https://www.youtube.com/embed/M0iSx6i2QxY",
    credits: "Direção de arte: Júlia Oliveira <br> Design de apoio: Wagner <br> Motion: Guto Rodrigues ",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
  },
  {
    title: "Vídeo ANAC passageiros",
    client: "SECOM · 2026",
    category: "video",
    tag: "Vídeo",
    desc: "Criação e produção de vídeo",
    fullDesc: "A equipe foi responsável pela criação e produção do vídeo de divulgação da Central de Soluções ANAC Passageiros, desenvolvido para apresentar a iniciativa e aproximar os passageiros dos canais e soluções disponibilizados pela Agência Nacional de Aviação Civil. O projeto traduziu as funcionalidades da Central em uma comunicação clara, dinâmica e acessível, contribuindo para orientar o público e ampliar o conhecimento sobre os serviços voltados aos usuários do transporte aéreo. A iniciativa está alinhada à estratégia da ANAC de aprimorar a experiência do cidadão no acesso aos seus serviços digitais.",
    thumb: "img/mockup20.gif",
    images: [],
    videoUrl: "https://www.youtube.com/embed/bxspcwxShxM",
    credits: "Edição de vídeo: Diego Campos <br> Animação: Alex Severino",
    pdfUrl: ""
  },
  {
    title: "Balanço Semanal de Imprensa",
    client: "SECOM · 2025",
    category: "design",
    tag: "design",
    desc: "layout e identidade visual desenvolvidos pela equipe.",
    fullDesc: "O Balanço Semanal de Imprensa é um produto desenvolvido para reunir e apresentar, de forma organizada e visual, as principais atividades realizadas pela equipe de atendimento ao longo da semana. A equipe foi responsável pela criação do layout e da identidade visual do material e, semanalmente, realiza sua diagramação e atualização, garantindo consistência visual, clareza na apresentação das informações e unidade entre as diferentes edições.",
    thumb: "img/mockup17.jpg",
    images: [
      "img/mockup18.jpg",
      "img/mockup19.jpg",
    ],
    videoUrl: "",
    credits: "Layout e diagramação: Alex Severino",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
  },
  {
      title: "Olímpiadas Paris 2024",
    client: "SECOM · 2024",
    category: "design",
    tag: "Design",
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
    category: "digital",
    tag: "Digital",
    desc: "Desenvolvimento e publicação de site",
    fullDesc: "Para apoiar a realização do concurso, a equipe desenvolveu uma página especial hospedada no gov.br, responsável por concentrar as informações do prêmio e viabilizar o acesso às inscrições. O projeto foi pensado também como um espaço permanente de memória, reunindo os resultados, trabalhos vencedores e o legado de Bruno e Dom, além de funcionar como repositório para as diferentes edições do concurso.",
    thumb: "img/mockup48.png",
    images: [
      "img/mockup49.png",
      "img/mockup50.png",
      "img/mockup51.png"
    ],
    videoUrl: "",
    credits: "Design e desenvolvimento: Júlia Oliveira <br> Publicação e atualizção: Marcelo Inácio",
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
    credits: "Gestão e atualização: Giovana Rodrigues",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
    {
      title: "Pacto contra o feminicídio",
    client: "SECOM · 2026",
    category: "design",
    tag: "Design",
    desc: "Diagramação e layout",
    fullDesc: "Criação do layout e diagramação da cartilha do Pacto Nacional Brasil contra o Feminicídio, iniciativa dos Três Poderes para prevenção e enfrentamento da violência contra mulheres e meninas.",
    thumb: "img/mockup38.jpg",
    images: [
      "img/mockup54.jpg",
      "img/mockup55.jpg",
    ],
    videoUrl: "",
    credits: "Layout e diagramação: Júlia Oliveira",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
    {
      title: "Landing Page: Crianças Adolescentes e Telas",
    client: "SECOM · 2026",
    category: "digital",
    tag: "Digital",
    desc: "Desenvolvimento da versão digital do guia Crianças, Adolescentes e Telas.",
    fullDesc: "A plataforma Crianças, Adolescentes e Telas foi desenvolvida como a versão digital do guia sobre o uso de dispositivos digitais por crianças e adolescentes, transformando seu conteúdo em uma experiência mais acessível e adequada ao ambiente online. A equipe foi responsável por todo o desenvolvimento da landing page, desde a concepção visual e organização das informações até a construção da interface, adaptando o conteúdo do guia para uma navegação mais dinâmica, intuitiva e responsiva.",
    thumb: "img/mockup36.jpg",
    images: [
      "img/mockup36.jpg",
      "img/mockup37.jpg"
    ],
    videoUrl: "",
    credits: "Desenvolvimento e publicação: Marcelo Inácio",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
    {
      title: "Coleção Educação Midiática",
    client: "SECOM · 2026",
    category: "digital",
    tag: "Digital",
    desc: "Criação da plataforma digital da Coleção",
    fullDesc: "A Coleção Brasileira de Educação Digital e Midiática foi criada pela Secom/PR em colaboração com o MEC para reunir, organizar e facilitar o acesso a cursos, materiais e recursos voltados à formação de professores e gestores e à implementação da educação digital e midiática nas escolas. A plataforma reúne mais de 90 formações e recursos, incluindo conteúdos do AVAMEC e do MEC RED. <br> A equipe foi responsável pelo desenvolvimento da plataforma digital da Coleção, incluindo a construção do site e de uma aplicação web que organiza as formações e permite pesquisar e filtrar os conteúdos de acordo com diferentes temas e saberes digitais. A ferramenta também possibilita selecionar cursos e materiais para montar trilhas formativas personalizadas e baixar a trilha construída, tornando a navegação pelo acervo mais prática e adaptada às necessidades de cada rede de ensino.",
    thumb: "img/mockup56.jpg",
    images: [
      "img/mockup53.jpg",
      "img/mockup52.gif"
    ],
    videoUrl: "",
    credits: "Criação do site e publicação: Marcelo Inácio <br> Desenvolvimento da coleção de cursos: Júlia Oliveira",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
    {
      title: "Infográficos Interativos",
    client: "SECOM · 2026",
    category: "digital",
    tag: "Digital",
    desc: "Criação de infográficos interativos para as matérias da SECOM",
    fullDesc: "Os Infográficos Interativos foram desenvolvidos para ilustrar matérias publicadas no site da Secom, transformando dados e informações em conteúdos mais visuais, dinâmicos e fáceis de compreender. A equipe foi responsável pela concepção, design e desenvolvimento das peças, explorando recursos de interatividade e visualização de dados para enriquecer a experiência de leitura e ampliar as possibilidades de apresentação das informações no ambiente digital.",
    thumb: "img/mockup33.gif",
    hideModalImage: true,
    images: [
      "img/mockup35.gif",
      "img/mockup34.gif"
    ],
    videoUrl: "",
    credits: "Direção de arte e desenvolvimento: Júlia Oliveira <br> Design: Alex Severino",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
    {
    title: "Campanha ECOA",
    client: "SECOM · 2025",
    category: "design",
    tag: "Design",
    desc: "Criação da identidade visual e dos desdobramentos da campanha ECOA",
    fullDesc: "A campanha “Respeito ecoa. Assédio não.” foi criada para informar e engajar profissionais do Executivo Federal sobre a prevenção e o enfrentamento ao assédio e à discriminação no ambiente de trabalho, tendo o acolhimento, a escuta e o respeito como eixos centrais da comunicação. A equipe foi responsável pela concepção criativa e pelo desenvolvimento visual da campanha, criando uma linguagem humanizada, acessível e direta e seus desdobramentos para diferentes pontos de contato.",
    thumb: "img/mockup41.jpg",
    images: [
      "img/mockup42.jpg",
      "img/mockup43.jpg",
      "img/mockup40.jpg"
    ],
    videoUrl: "",
    credits: "Identidade Visual e design: Júlia Oliveira <br> Design e alterações: Wan Chagas",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
    {
    title: "Diário Govbr",
    client: "SECOM · 2025",
    category: "design",
    tag: "Design",
    desc: "Diagramação diária com as principais notícias do Gov",
    fullDesc: "O Diário Gov.br é um informativo produzido diariamente com as principais notícias dos ministérios, desenvolvido em duas edições: uma direcionada ao ministro e outra para circulação no grupo de WhatsApp do SICOM. A equipe foi responsável pela diagramação diária do produto, garantindo agilidade, organização das informações e consistência visual ao longo de mais de 300 edições produzidas.",
    thumb: "img/mockup46.png",
    images: [
      "img/mockup44.png",
      "img/mockup45.png",
      "img/mockup47.png"
    ],
    videoUrl: "",
    credits: "Diagramação: Alex Severino, Júlia Oliveira e Wan Chagas",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
    {
    title: "Relatórios para o presidente",
    client: "SECOM · 2026",
    category: "design",
    tag: "Design",
    desc: "Criação da identidade visual e diagramação de relatórios estratégicos",
    fullDesc: "A equipe foi responsável pela criação da identidade visual e pela diagramação de relatórios estratégicos, incluindo os relatórios de viagens internacionais do presidente e o relatório quinzenal regional. O trabalho buscou organizar e hierarquizar grandes volumes de informação de forma clara e visual, criando uma linguagem gráfica consistente que facilita a leitura, a consulta de dados e a compreensão dos principais destaques de cada documento.",
    thumb: "img/mockup57.png",
    images: [
      "img/mockup58.png",
      "img/mockup59.png",
      "img/mockup60.png"
    ],
    videoUrl: "",
    credits: "Direção de arte e diagramação: Wan Chagas ",
    pdfUrl: "",
    pdfLabel: "Baixar apresentação"
    },
  
     
      
];

// Exibe os projetos do mais recente ao mais antigo.
CASES.sort((a, b) => {
  const yearA = Number(a.client.match(/\d{4}/)?.[0]) || 0;
  const yearB = Number(b.client.match(/\d{4}/)?.[0]) || 0;
  return yearB - yearA;
});
