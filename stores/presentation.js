const menuItems = [
  'P2P what?!',
  'hyper*',
  'dat://',
  '🚂choo🚂'
]

const pres = [
  {
    type: 'title',
    title: 'download app from http://bit.ly/knowabungap2p for better experience'
  },
  {
    type: 'headline',
    title: '🚂 Board a P2P train with choo 🚂',
    subtitle: '@kkogovsek'
  },
  {
    type: 'listWithImage',
    image: 'assets/klemen.png',
    items: [
      '🇸🇮 I\'m klemen',
      '☕️📜 I do JS (anykind)',
      '⌨️💩 I build dumb shit',
      '🥁 I play drums',
      '💾 I use vim',
      '▲ btw I used arch',
    ]
  },
  {
    type: 'menu',
    items: menuItems,
    number: 1
  },
  {
    type: 'survey',
    name: 'developer',
    question: 'Are you JS developer?',
    options: ['yay', 'nei']
  },
  {
    type: 'survey',
    name: 'tabs',
    question: 'tabs/spaces?',
    options: ['2 spaces ftw', 'tabs 😱', 'prettier']
  },
  {
    type: 'survey',
    name: 'gif',
    question: 'How do you pronounce GIF?',
    options: ['like a normal human being', 'JIF']
  },
  {
    type: 'survey',
    name: 'lagom',
    question: 'do you even lagom?',
    options: ['all the time', 'f**k lagom']
  },
  {
    type: 'survey',
    name: 'pineaple',
    question: 'Pineapple on pizza?',
    options: ['🍍', '🤮']
  },
  {
    type: 'survey',
    name: 'cloud',
    question: 'Have you ever used cloud storage?',
    options: ['yes', 'no']
  },
  {
    type: 'listWithImage',
    image: 'assets/cloud.png',
    items: [
      '👌 good ui',
      '👌 simple sharing',
      '👎 only static files',
      '👎 centralised',
    ]
  },
  {
    type: 'survey',
    name: 'torrent',
    question: 'Have you ever used torrents?',
    options: ['yes', 'yes']
  },
  {
    type: 'listWithImage',
    image: 'assets/bittorrent.svg',
    items: [
      '👌 decentralized',
      '👌 simple protocol',
      '👎 only static files',
      '👎 scales badly',
      '👎 diff & history',
    ]
  },
  {
    type: 'listWithImage',
    image: 'assets/dat-logo.png',
    items: [
      '☠️ decentralized',
      '🏙️ modular',
      '⬢ node.fs like api',
      '📺 dynamic data/streams',
      '⚡ fast',
      '🤷 diffing',
      '📝 append-only log'
    ]
  },
  ...(new Array(15)).fill(null).map(
    (_, id) => ({ type: 'image', image: `assets/tree/tree${id + 1}.png` })
  ),
  {
    type: 'survey',
    name: 'tree',
    question: 'Are you shure you see the patern?',
    options: ['hell yeah', 'nope']
  },
  {
    type: 'menu',
    items: menuItems,
    number: 2
  },
  {
    type: 'image',
    image: 'assets/hypercore-joke.png'
  },
  {
    type: 'image',
    image: 'assets/hypercore.svg'
  },
  {
    type: 'image',
    portrait: true,
    image: 'assets/hypercore1.svg'
  },
  {
    type: 'image',
    portrait: true,
    image: 'assets/hypercore2.svg'
  },
  {
    type: 'title',
    title: 'multifeed'
  },
  {
    type: 'image',
    portrait: true,
    image: 'assets/multifeed.svg'
  },
  {
    type: 'title',
    title: 'kappa'
  },
  {
    type: 'image',
    portrait: true,
    image: 'assets/kappa.svg'
  },
  {
    type: 'title',
    title: '...also hyperdrive, hyperdb, hyperswarm...'
  },
  {
    type: 'survey',
    name: 'exciting',
    question: 'Does it sound exciting?',
    options: ['hell yeah', 'nope']
  },
  {
    type: 'menu',
    items: menuItems,
    number: 3
  },
  {
    type: 'image',
    image: 'assets/dat-js.svg'
  },
  {
    type: 'image',
    portrait: true,
    image: 'assets/dat-in-browser.png'
  },
  {
    type: 'image',
    portrait: true,
    image: 'assets/dat-in-browser1.png'
  },
  {
    type: 'image',
    image: 'assets/dat-in-browser4.png'
  },
  {
    type: 'image',
    image: 'assets/dat-in-browser2.png'
  },
  {
    type: 'image',
    image: 'assets/dat-in-browser3.png'
  },
  {
    type: 'survey',
    name: 'trydat',
    question: 'Will you try dat/beaker?',
    options: ['yeah', 'nope', 'maybe']
  },
  {
    type: 'menu',
    items: menuItems,
    number: 4
  },
  {
    type: 'headline',
    title: 'sturdy 4kb frontend framework',
    subtitle: '🚂🚋🚋🚋🚋🚋'
  },
  {
    type: 'listWithImage',
    items: [
      'minimal size',
      'event based',
      'small api',
      'minimal tooling',
      'isomorphic',
      'very cute'
    ],
    image: 'assets/choo.gif'
  },
  {
    type: 'listWithImage',
    image: 'assets/choo-flow.png',
    items: [
      'global mutable state',
      'event emmiter',
      'router',
      'stores'
    ]
  },
  {
    type: 'survey',
    name: 'hype',
    question: 'Is the hype real?',
    options: ['yeah', 'nope']
  },
  {
    type: 'image',
    image: 'assets/talk-cheap.jpg'
  },
  {
    type: 'title',
    title: 'rly intel? talk is show me the cheap. code.'
  },
  {
    type: 'image',
    image: 'assets/dont-dead.jpg' 
  },
  {
    type: 'survey',
    name: 'dontdead',
    question: 'Do you even r/dontdeadopeninside?',
    options: ['yup', 'wtf']
  },
  {
    type: 'image',
    portrait: true,
    image: 'assets/choo-index.svg'
  },
  {
    type: 'image',
    portrait: true,
    image: 'assets/svg-view.svg'
  },
  {
    type: 'image',
    portrait: true,
    image: 'assets/store.svg'
  },
  {
    type: 'image',
    image: 'assets/code.gif'
  },
  {
    type: 'image',
    image: 'assets/log.gif'
  },
  {
    type: 'survey',
    name: 'nufsaid',
    question: 'Was this enough of the code?',
    options: ['yup', 'open your vim']
  },
  {
    type: 'survey',
    name: 'howcool',
    question: 'How much fun did you have?',
    options: ['1', '3', '3', '7']
  },
  {
    type: 'image',
    image: 'assets/fishbowl.gif'
  },
  {
    type: 'image',
    image: 'assets/we-got-this.png',
    background: '#002B55'
  }
]

function store (state, emmiter) {
  state.slideNr = 0
  state.slide = pres[state.slideNr]
  state.lastSlide = 0
  state.totalSlides = pres.length
  function incrementSlide (inc) {
    if (state.slideNr + inc > state.lastSlide && state.name !== 'klemen_presentation') {
      return
    }
    if (state.slideNr + inc >= state.totalSlides || state.slideNr + inc < 0) {
      return
    }
    state.slideNr += inc
    state.slide = pres[state.slideNr]
    emmiter.emit('render')
    if (state.name === 'klemen_presentation') {
      emmiter.emit('sendmessage', {action: 'lastslide', number: state.slideNr})
    }
    emmiter.emit('newslide', state.slideNr)
  }
  window.addEventListener('keydown', function (event) {
    switch (event.code) {
      case 'ArrowLeft': {
        incrementSlide(-1)
        break;
      }
      case 'ArrowRight': {
        incrementSlide(1)
        break;
      }
    }
  })
  emmiter.on('feed:lastslide', function ({ number }) {
    if (state.name !== 'klemen_presentation') {
      if (state.lastSlide === state.slideNr) {
        state.slideNr = number
        state.slide = pres[number]
      }
      state.lastSlide = number;
      emmiter.emit('render')
    }
  })
}

module.exports = store
