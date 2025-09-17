const poemas = [
  {
    slug: "2091",
    titulo: "2091",
    resumo: "Uma voz reflete sobre a juventude e a velhice, deixando um alerta urgente para todos nós: viva o agora.",
    file: "/poems/2091.md"
  },
  {
    slug: "a-arte-do-obvio",
    titulo: "A arte do óbvio",
    resumo: "Uma busca por sentido no que é individual e, ao mesmo tempo, coletivo, em meio a dúvidas e conflitos internos.",
    file: "/poems/a-arte-do-obvio.md"
  },
  {
    slug: "a-carta",
    titulo: "A carta",
    resumo: "Sobre a mesa, uma carta vazia sela o destino de um adeus, onde os meios justificam o inevitável fim.",
    file: "/poems/a-carta.md"
  },
  {
    slug: "agora",
    titulo: "Agora!",
    resumo: "Um sentimento submerso e imediato, que transforma o outro em um reflexo de si mesmo, além do tempo.",
    file: "/poems/agora.md"
  },
  {
    slug: "aguas-passadas",
    titulo: "Águas passadas",
    resumo: "Uma reflexão sobre afogar-se no próprio ego e aceitar que os erros do passado constroem quem somos agora.",
    file: "/poems/aguas-passadas.md"
  },
  
  {
    slug: "avalanche",
    titulo: "Avalanche",
    resumo: "Em um filme sem final, a insegurança e a lembrança de um amor passado criam uma avalanche de sentimentos.",
    file: "/poems/avalanche.md"
  },
  {
    slug: "balanca",
    titulo: "Balança",
    resumo: "O equilíbrio instável de um amor que conforta e fere, comparado a uma rosa bela, mas cheia de espinhos.",
    file: "/poems/balanca.md"
  },
  {
    slug: "caos",
    titulo: "Caos",
    resumo: "Quantas linhas são precisas para esquecer o caos? Uma luta contra o tempo e a memória em aquarela.",
    file: "/poems/caos.md"
  },
  {
    slug: "ciclo",
    titulo: "Ciclo",
    resumo: "Um refém voluntário, que troca a saída pela permanência, preso a um ciclo de idas e vindas de um amor.",
    file: "/poems/ciclo.md"
  },
  {
    slug: "cinza",
    titulo: "Cinza",
    resumo: "Apesar do cinza que emana de tudo, a mistura de dores e sabores anuncia o novo dia que canta.",
    file: "/poems/cinza.md"
  },
  {
    slug: "debito",
    titulo: "Débito",
    resumo: "Como um náufrago pagando uma sentença, o eu lírico questiona se sua vida está atrasada ou apenas em recaída.",
    file: "/poems/debito.md"
  },
  {
    slug: "declinio",
    titulo: "Declínio",
    resumo: "Sem culpas, o eu lírico joga suas últimas cartas, questionando se a tristeza do agora apaga o passado.",
    file: "/poems/declinio.md"
  },
  {
    slug: "defeitos-controversos",
    titulo: "Defeitos controversos",
    resumo: "Os defeitos se tornam qualidades em um amor paciente, que prioriza o momento, mas luta por um futuro a dois.",
    file: "/poems/defeitos-controversos.md"
  },
  {
    slug: "domingo-chuvoso",
    titulo: "Domingo chuvoso",
    resumo: "A lembrança de um amor completo e a dor da incerteza: a dificuldade de querer um reencontro sem garantias.",
    file: "/poems/domingo-chuvoso.md"
  },
  {
    slug: "erros-em-versos",
    titulo: "Erros em versos",
    resumo: "Uma busca por algo perdido, onde sorrisos fingidos escondem um vazio e a promessa de ser inteiro luta contra a hipocrisia.",
    file: "/poems/erros-em-versos.md"
  },
  {
    slug: "fecha-o-clima",
    titulo: "Fecha o clima",
    resumo: "Uma crítica ao mundo cinza e superficial, onde a vista turva busca por alma, mas só encontra roupas.",
    file: "/poems/fecha-o-clima.md"
  },
  {
    slug: "formula",
    titulo: "Fórmula",
    resumo: "Sem fórmula para a vida, o medo cresce com a repetição, mas a certeza de um novo dia sempre prevalece.",
    file: "/poems/formula.md"
  },
  {
    slug: "incansavel",
    titulo: "Incansável",
    resumo: "Cansado de pessoas vazias, o eu lírico encontra sua única lei e maior força na resiliência de cair e levantar.",
    file: "/poems/incansavel.md"
  },
  {
    slug: "lacos",
    titulo: "Laços",
    resumo: "Moldado por danos irreparáveis do passado, o eu lírico conclui que laços sufocam e, na dúvida, é preciso partir.",
    file: "/poems/lacos.md"
  },
  {
    slug: "mare",
    titulo: "Maré",
    resumo: "Após naufragar em um amor raso, aprende o que não merece e vê a maré levar quem ficou estagnado.",
    file: "/poems/mare.md"
  },
  {
    slug: "mente-fechada",
    titulo: "Mente fechada",
    resumo: "A poesia, antes fantasia, hoje serve para lutar contra uma mente fechada, mesmo que o único ganho seja interno.",
    file: "/poems/mente-fechada.md"
  },
  {
    slug: "o-promotor",
    titulo: "O promotor",
    resumo: "Em um labirinto de incertezas, o tempo age como um promotor, que afoga em lágrimas e depois chama de amor.",
    file: "/poems/o-promotor.md"
  },
  {
    slug: "onipresente",
    titulo: "Onipresente",
    resumo: "Um sentimento onipresente prende o eu lírico, ansioso demais para ganhar e ganancioso demais para perder.",
    file: "/poems/onipresente.md"
  },
  {
    slug: "operacao-de-risco",
    titulo: "Operação de risco",
    resumo: "Uma paixão viciante onde o outro é a anestesia para os problemas, uma arriscada escolha pelo presente.",
    file: "/poems/operacao-de-risco.md"
  },
  {
    slug: "poco",
    titulo: "Poço",
    resumo: "A jornada de um poço profundo e sem cor, onde a busca por ajuda encontra a cura em um abraço amigo.",
    file: "/poems/poco.md"
  },
  {
    slug: "pressentimento",
    titulo: "Pressentimento",
    resumo: "Cansado de um amor preso ao passado, o eu lírico busca sinceridade e tem o pressentimento de que a relação chegou ao fim.",
    file: "/poems/pressentimento.md"
  },
  {
    slug: "proxima-vez",
    titulo: "Proxima vez",
    resumo: "Apesar de uma promessa quebrada e da tentativa de seguir em frente, a certeza é de perder tudo se ela voltar.",
    file: "/poems/proxima-vez.md"
  },
  {
    slug: "refem",
    titulo: "Refém",
    resumo: "Uma noite de sofrimento, onde o desejo de despir é maior que a vontade de esquecer, tornando-o um eterno refém.",
    file: "/poems/refem.md"
  },
  {
    slug: "replay",
    titulo: "Replay",
    resumo: "Tentando não errar de novo, a dúvida permanece: seria um novo envolvimento ou apenas mais uma promessa em vão?",
    file: "/poems/replay.md"
  },
  {
    slug: "segunda-fase",
    titulo: "Segunda fase",
    resumo: "O caos interno corrompe a alma, gerando uma paralisia romântica: a vontade de partir, mas a incapacidade de continuar.",
    file: "/poems/segunda-fase.md"
  },
  {
    slug: "tempestade",
    titulo: "Tempestade",
    resumo: "A rotina, amarga como o café, é iluminada pelo sol. Mas quando a tempestade se aproxima, a vida exige cautela.",
    file: "/poems/tempestade.md"
  },
  {
    slug: "terceira-pessoa",
    titulo: "Terceira pessoa",
    resumo: "O eu lírico mudou, mas as memórias causam confusão. Escrever sobre o passado é o que salva uma nova relação.",
    file: "/poems/terceira-pessoa.md"
  },
  {
    slug: "universo",
    titulo: "Universo",
    resumo: "Um amor que criou um universo particular, mas que com o tempo se desfez, virando um sonho e uma lacuna.",
    file: "/poems/universo.md"
  },
  {
    slug: "vazio",
    titulo: "Vazio",
    resumo: "Carregando um vazio, a falta de futuro dói, e as palavras se tornam a pá para enterrar o passado.",
    file: "/poems/vazio.md"
  },
  {
    slug: "vicio",
    titulo: "Vício",
    resumo: "A insistência se torna intragável quando os erros são constantes, mas entre vícios e incertezas, resta apenas o seu olhar.",
    file: "/poems/vicio.md"
  }
];

export default poemas;