export const projects = [
  {
    id: "agencia-criativa-web",
    title: "Agência Criativa Web",
    subtitle: "Site institucional responsivo com SCSS + BEM",
    description:
      "Projeto com foco em estrutura, responsividade e organização profissional de estilos (SCSS com parciais + padrão BEM).",
    problem:
      "Construir um site institucional com layout consistente e estilos bem organizados, funcionando bem em diferentes tamanhos de tela.",
    solution:
      "Estruturação do layout em seções, padronização de classes (BEM) e uso de SCSS modularizado (parciais) para facilitar manutenção.",
    impact:
      "Código mais legível e escalável, com base pronta para evoluir novas páginas/componentes sem bagunçar estilos.",
    tech: ["HTML", "SCSS", "BEM", "Responsividade", "Lighthouse (Desktop)"],
    repoUrl: "https://github.com/Kawakvmi/agencia-criativa-web",
    liveUrl: "",
    highlights: ["SCSS com parciais", "BEM", "Responsivo", "Organização de pastas"],
  },
  {
    id: "crud-clientes",
    title: "Gestor de Clientes (CRUD)",
    subtitle: "Consumo de API com Fetch (GET, POST, DELETE)",
    description:
      "Aplicação web consumindo API para cadastrar, listar e excluir clientes com fluxo direto e código organizado.",
    problem:
      "Manter uma lista de clientes com persistência (API) e operações básicas de cadastro e remoção.",
    solution:
      "Integração via Fetch API com endpoints de CRUD, separando funções e mantendo atualização de UI clara.",
    impact:
      "Demonstra domínio prático de consumo de API e manipulação de dados na interface.",
    tech: ["JavaScript", "Fetch API", "CRUD", "HTML", "CSS"],
    repoUrl: "https://github.com/Kawakvmi",
    liveUrl: "",
    highlights: ["CRUD completo", "Integração com API", "Fluxo simples"],
  },
  {
    id: "parquimetro-poo",
    title: "Simulador de Parquímetro (POO)",
    subtitle: "Cálculo de tempo e troco com lógica encapsulada",
    description:
      "Simulador que calcula o tempo de estacionamento conforme valor inserido e retorna troco seguindo regras definidas.",
    problem:
      "Implementar regras de negócio (tempo x valor) com cálculo de troco, mantendo clareza e organização.",
    solution:
      "Estruturação com POO (classes e métodos) para encapsular regras e manter o código fácil de manter.",
    impact:
      "Mostra base de lógica e organização de código, com foco em regras claras e manutenção simples.",
    tech: ["JavaScript", "POO", "HTML", "CSS"],
    repoUrl: "https://github.com/Kawakvmi",
    liveUrl: "",
    highlights: ["POO na prática", "Regras claras", "Cálculo de troco"],
  },
  {
    id: "fitdaily-pro",
    title: "FitDaily PRO (MVP)",
    subtitle: "Produto em andamento: treinos por dia + check-in",
    description:
      "MVP de um app para organizar treinos por dia da semana, marcar como concluído e acompanhar consistência.",
    problem:
      "Facilitar a execução do treino do dia com visualização clara e check-in rápido.",
    solution:
      "Estrutura por dias, checklist e progressão simples, com foco em componentização e UI clara.",
    impact:
      "Demonstra visão de produto e capacidade de planejar uma entrega escalável com React.",
    tech: ["React", "CSS Modules", "Componentização"],
    repoUrl: "",
    liveUrl: "",
    highlights: ["Visão de produto", "MVP", "Interface simples"],
    isExtra: true
  },
];