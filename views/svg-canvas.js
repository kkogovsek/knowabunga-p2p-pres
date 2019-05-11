var html = require('choo/html')

function view (state, emit) {
  const { clientWidth, clientHeight } = document.documentElement
  const now = Date.now()
  const logableLines = state.log.filter(({ end }) => !end || end + 7000 > now)
  if (logableLines.length) {
    requestAnimationFrame(() => emit('render'))
  }

  return html`
    <svg width=${clientWidth} height=${clientHeight}>
      ${logableLines.map(
        ({ x, y, start, end, color, stroke, speed }) => html`
          <line
            x1=${clientWidth * x - (end ? clientWidth * (now - end) / speed : 0)}
            y1=${clientHeight * y + ( end ? clientHeight * (now - end) / speed : 0 )}
            x2=${clientWidth * x - clientWidth * (now - start) / speed}
            y2=${clientHeight * y + clientHeight * (now - start) / speed}
            stroke=${color}
            stroke-width=${stroke}
            stroke-linecap="round"
          />
        `
      )}
    </svg>
  `
}

module.exports = view
