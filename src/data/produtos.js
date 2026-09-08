// ─────────────────────────────────────────────────────────────
//  Catálogo da BELLIS.
//
//  Para adicionar uma peça: copie a foto para public/produtos/ e
//  duplique um bloco abaixo. Campos:
//    fotos     → a primeira é a capa do card; as outras viram miniaturas
//    cores     → bolinhas no card (nome + hex)
//    tamanhos  → lista de strings; aparecem como etiquetas
//    tags      → selos por cima da foto ('Novidade', 'Queridinha'…)
// ─────────────────────────────────────────────────────────────

export const CATEGORIAS = [
  'Tudo',
  'Polos',
  'T-Shirts',
  'Tops',
  'Calças',
  'Shorts',
  'Saias',
  'Vestidos',
  'Tricô',
]

export const PRODUTOS = [
  {
    id: 1,
    nome: 'Polo Lisa',
    categoria: 'Polos',
    preco: 'R$ 44,90',
    descricao:
      'Gola aberta em V, malha canelada com toque macio. Fica bem por dentro da saia ou solta, com jeans.',
    tags: ['Novidade'],
    cores: [
      { nome: 'Off white', hex: '#F4F1EA' },
      { nome: 'Marrom', hex: '#5A3D28' },
      { nome: 'Preto', hex: '#1C1917' },
    ],
    fotos: [
      { src: '/produtos/polo-lisa-look.jpg', alt: 'Polo Lisa off white vestida com saia terracota' },
      { src: '/produtos/polo-lisa-marrom.jpg', alt: 'Polo Lisa marrom vista de frente no cabide' },
      { src: '/produtos/polo-lisa-cores.jpg', alt: 'Polo Lisa nas três cores: marrom, off white e preto' },
    ],
  },

  {
    id: 2,
    nome: 'T-Shirt',
    categoria: 'T-Shirts',
    preco: 'R$ 34,90',
    descricao:
      'Algodão leve com estampa exclusiva, modelagem soltinha. Duas artes: Sardines e Santorini.',
    tags: ['Queridinha'],
    cores: [
      { nome: 'Off white', hex: '#F4F1EA' },
      { nome: 'Marrom', hex: '#4B2E22' },
    ],
    fotos: [
      { src: '/produtos/tshirt-sardines-look.jpg', alt: 'T-Shirt branca com estampa Sardines vestida' },
      { src: '/produtos/tshirt-sardines.jpg', alt: 'T-Shirt branca com estampa Sardines no cabide' },
      { src: '/produtos/tshirt-santorini.jpg', alt: 'T-Shirt marrom com estampa Santorini no cabide' },
    ],
  },

  {
    id: 3,
    nome: 'Calça Alfaiataria',
    categoria: 'Calças',
    preco: 'R$ 74,90',
    descricao:
      'Cintura alta com botão forrado, pregas na frente e caimento reto. Alonga a silhueta e cai bem com salto ou tênis.',
    tags: ['Novidade'],
    tamanhos: ['P — 36', 'M — 38', 'G — 40'],
    cores: [
      { nome: 'Off white', hex: '#EDE6DA' },
      { nome: 'Terracota', hex: '#B44226' },
      { nome: 'Preto', hex: '#17161A' },
    ],
    fotos: [
      { src: '/produtos/calca-look.jpg', alt: 'Calça de alfaiataria terracota vestida com polo off white' },
      { src: '/produtos/calca-cores.jpg', alt: 'Calça de alfaiataria nas três cores: off white, terracota e preto' },
      { src: '/produtos/calca-tecido.jpg', alt: 'Detalhe do tecido e do vinco frontal da calça terracota' },
    ],
  },

  {
    id: 4,
    nome: 'Short Alfaiataria',
    categoria: 'Shorts',
    preco: 'R$ 44,90',
    descricao:
      'Cintura alta com pregas, bolso embutido e barra reta. O mesmo acabamento da calça, na versão de verão.',
    tags: ['Queridinha'],
    tamanhos: ['P — 36', 'M — 38/40', 'G — 42/44'],
    cores: [
      { nome: 'Preto', hex: '#17161A' },
      { nome: 'Off white', hex: '#EFE9E3' },
      { nome: 'Rosé', hex: '#C08469' },
      { nome: 'Marrom', hex: '#7A3A33' },
    ],
    fotos: [
      { src: '/produtos/short-look-frente.jpg', alt: 'Short de alfaiataria marrom vestido, visto de frente' },
      { src: '/produtos/short-look-costas.jpg', alt: 'Short de alfaiataria marrom visto por trás' },
      { src: '/produtos/short-cores-abertas.jpg', alt: 'Short de alfaiataria nas quatro cores lado a lado' },
      { src: '/produtos/short-cores.jpg', alt: 'Short de alfaiataria dobrado nas quatro cores' },
    ],
  },

  {
    id: 5,
    nome: 'Top Tricô',
    categoria: 'Tricô',
    preco: 'R$ 34,90',
    descricao:
      'Tricô fino de toque macio, modelagem curta. O básico que resolve o look sozinho ou por baixo do blazer.',
    tags: [],
    cores: [
      { nome: 'Preto', hex: '#17161A' },
      { nome: 'Marrom', hex: '#6B4534' },
      { nome: 'Rosa seco', hex: '#C29C97' },
      { nome: 'Off white', hex: '#F2EBDC' },
      { nome: 'Rosa', hex: '#EFA8B8' },
    ],
    fotos: [
      { src: '/produtos/top-trico-cores.jpg', alt: 'Top de tricô nas cinco cores disponíveis' },
    ],
  },

  {
    id: 6,
    nome: 'Polo Tricô',
    categoria: 'Tricô',
    preco: 'R$ 34,90',
    descricao:
      'Sem manga, com gola marinheira e decote V. Tricô encorpado com barra canelada — dá um ar arrumado a qualquer calça.',
    tags: ['Novidade'],
    cores: [
      { nome: 'Off white', hex: '#F5F3EF' },
      { nome: 'Verde', hex: '#8FBF7F' },
      { nome: 'Preto', hex: '#17161A' },
    ],
    fotos: [
      { src: '/produtos/polo-trico-cores.jpg', alt: 'Polo de tricô nas três cores: off white, verde e preto' },
      { src: '/produtos/polo-trico-verde.jpg', alt: 'Polo de tricô verde no cabide, vista frontal' },
      { src: '/produtos/polo-trico-branco.jpg', alt: 'Polo de tricô off white no cabide, vista frontal' },
      { src: '/produtos/polo-trico-preto.jpg', alt: 'Polo de tricô preto no cabide, vista frontal' },
    ],
  },

  {
    id: 7,
    nome: 'Alcinha Drapeada',
    categoria: 'Tops',
    preco: 'R$ 44,90',
    descricao:
      'Decote V com bojo, franzido nas laterais e costas nuas. Alças finas reguláveis — o top que segura o look da noite.',
    tags: ['Novidade'],
    cores: [{ nome: 'Preto', hex: '#17161A' }],
    fotos: [
      { src: '/produtos/alcinha-drapeada-frente.jpg', alt: 'Top Alcinha Drapeada preto visto de frente' },
      { src: '/produtos/alcinha-drapeada-costas.jpg', alt: 'Top Alcinha Drapeada preto visto de costas' },
    ],
  },

  {
    id: 8,
    nome: 'Laço Frontal',
    categoria: 'Tops',
    preco: 'R$ 44,90',
    descricao:
      'Cropped de alcinha com amarração no busto e barra soltinha. Fica lindo com jeans de cintura baixa.',
    tags: ['Novidade'],
    cores: [{ nome: 'Off white', hex: '#F4F1EA' }],
    fotos: [
      { src: '/produtos/laco-frontal.jpg', alt: 'Top Laço Frontal off white com amarração, visto de frente' },
    ],
  },

  {
    id: 9,
    nome: 'Saia Longa',
    categoria: 'Saias',
    preco: 'R$ 64,90',
    descricao:
      'Malha canelada com cós dobrado e caimento sereia. Marca a silhueta sem apertar e vai do dia à noite.',
    tags: ['Queridinha'],
    cores: [
      { nome: 'Off white', hex: '#F2EEE6' },
      { nome: 'Preto', hex: '#17161A' },
      { nome: 'Marrom', hex: '#8A5348' },
    ],
    fotos: [
      { src: '/produtos/saia-longa-off-frente.jpg', alt: 'Saia Longa off white vista de frente' },
      { src: '/produtos/saia-longa-off-costas.jpg', alt: 'Saia Longa off white vista de costas' },
      { src: '/produtos/saia-longa-preta.jpg', alt: 'Saia Longa preta vista de frente' },
      { src: '/produtos/saia-longa-marrom.jpg', alt: 'Saia Longa marrom vista de frente' },
    ],
  },

  {
    id: 10,
    nome: 'Geométrica Renda',
    categoria: 'Tops',
    preco: 'R$ 49,90',
    descricao:
      'Frente única em losango com renda delicada na borda e amarração no pescoço e nas costas. Peça de festa.',
    tags: [],
    cores: [{ nome: 'Marrom rosado', hex: '#8B5A4E' }],
    fotos: [
      { src: '/produtos/geometrica-renda-frente.jpg', alt: 'Top Geométrica Renda marrom rosado visto de frente' },
      { src: '/produtos/geometrica-renda-lado.jpg', alt: 'Top Geométrica Renda visto de lado, mostrando a amarração' },
      { src: '/produtos/geometrica-renda-costas.jpg', alt: 'Top Geométrica Renda visto de costas, com as tiras soltas' },
    ],
  },

  {
    id: 11,
    nome: 'Alça Dupla Poliamida',
    categoria: 'Tops',
    preco: 'R$ 54,90',
    descricao:
      'Poliamida encorpada com recortes que afinam a cintura, decote reto e alça dupla. Não amassa e não marca.',
    tags: ['Novidade'],
    cores: [
      { nome: 'Preto', hex: '#17161A' },
      { nome: 'Marrom', hex: '#6B3B2C' },
      { nome: 'Off white', hex: '#F5F0E4' },
    ],
    fotos: [
      { src: '/produtos/alca-dupla-preto.jpg', alt: 'Top Alça Dupla preto visto de frente' },
      { src: '/produtos/alca-dupla-marrom.jpg', alt: 'Top Alça Dupla marrom visto de frente' },
      { src: '/produtos/alca-dupla-off-frente.jpg', alt: 'Top Alça Dupla off white visto de frente' },
      { src: '/produtos/alca-dupla-off-costas.jpg', alt: 'Top Alça Dupla off white visto de costas' },
    ],
  },

  {
    id: 12,
    nome: 'Longo Decote Reto',
    categoria: 'Vestidos',
    preco: 'R$ 124,90',
    descricao:
      'Vestido longo de viscose com marias-chiquinhas reguláveis, decote reto e saia em camadas. Leve para o calor.',
    tags: [],
    cores: [
      { nome: 'Preto', hex: '#17161A' },
      { nome: 'Azul', hex: '#5BA3DE' },
      { nome: 'Bege', hex: '#D8B79A' },
    ],
    fotos: [
      { src: '/produtos/longo-decote-reto-cores.jpg', alt: 'Vestido Longo Decote Reto nas três cores: preto, azul e bege' },
    ],
  },

  {
    id: 13,
    nome: 'Longo Decote V',
    categoria: 'Vestidos',
    preco: 'R$ 114,90',
    descricao:
      'Viscose fluida com decote V, franzido no busto e amarração com tassel na cintura. Alças reguláveis e fenda lateral.',
    tags: ['Queridinha'],
    cores: [
      { nome: 'Rosa', hex: '#EE85B5' },
      { nome: 'Vermelho', hex: '#C9271B' },
    ],
    fotos: [
      { src: '/produtos/longo-decote-v-rosa.jpg', alt: 'Vestido Longo Decote V rosa visto de frente' },
      { src: '/produtos/longo-decote-v-cores.jpg', alt: 'Vestido Longo Decote V nas duas cores: rosa e vermelho' },
    ],
  },

  {
    id: 14,
    nome: 'Peplum',
    categoria: 'Tops',
    preco: 'R$ 34,90',
    descricao:
      'Alcinha regulável, decote reto e babado na cintura. Cinco cores — inclusive listrado — para resolver o look com uma peça só.',
    tags: ['Novidade'],
    cores: [
      { nome: 'Bege', hex: '#DCCFC2' },
      { nome: 'Off white', hex: '#F6F4F0' },
      { nome: 'Listrado', hex: '#5B2B26' },
      { nome: 'Marrom', hex: '#43231F' },
      { nome: 'Vinho', hex: '#7C1834' },
    ],
    fotos: [
      { src: '/produtos/peplum-cores.jpg', alt: 'Top Peplum nas cinco cores no cabide' },
      { src: '/produtos/peplum-bege.jpg', alt: 'Top Peplum bege em destaque, com as outras cores atrás' },
    ],
  },
]
