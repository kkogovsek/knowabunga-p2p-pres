var html = require('choo/html')
var svgCanvas = require('./svg-canvas')
var presentation = require('./presentation')

var TITLE = 'choo-demo - main'

module.exports = view

function nameInput (state, emit) {
  if (!state.nameInput) state.nameInput = ''
  return html`
    <style>
      .name-container {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 512px;
        height: 256px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translate(-50%, -50%);
        background: #002B55;
      }
      .name-container input {
        margin: 0 16px;
        border: none;
        background: white;
        color: black;
        font-weight: bold;
        padding: 16px;
        font-size: 24px;

      }
      .name-container button {
        margin: 0 16px;
        border: none;
        background: #80C565;
        color: white;
        font-weight: bold;
        padding: 16px;
        font-size: 24px;
      }
    </style>
    <div class="name-container">
      <input id="nameInput" value=${state.nameInput} oninput=${onchange} />
      <button onclick=${set}>_join</button>
    </div>
  `

  function onchange (e) {
    state.nameInput = e.target.value
  }

  function set () {
    emit('setnewname', state.nameInput)
  }
}

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body style="margin: 0; position: relative;">
      <style>
        .logo {
          height: 32px;
          width: auto;
          position: fixed;
          bottom: 16px;
          left: 16px;
          top: unset;
          transform: none;
        }
        .logo.right {
          left: unset;
          right: 16px;
        }
      </style>
      ${svgCanvas(state, emit)}
      ${presentation(state, emit)}
      ${!state.name && nameInput(state, emit) || ''}
      <img src="assets/logo.png" class="logo" />
      <img src="assets/knowabunga.png" class="logo right" />
    </body>
  `
}
