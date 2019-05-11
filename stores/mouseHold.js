const colors = [
  '#7fc567',
  '#81aad9',
  '#293381',
  '#152a52',
  '#dedfed',
  '#fef7eb',
  '#7fc567',
  '#7fc567'
]

function getColor () {
  return colors[Math.floor(Math.random() * colors.length)]
}

const name = process.env.NAME

function store (state, emmiter) {
  emmiter.on('DOMContentLoaded', function () {
    const el = document.documentElement
    let moving = false
    el.addEventListener('mousedown', function (e) {
      moving = true
      const [x, y] = getCoordinates(e)
      emmiter.emit('sendmessage', {
        timestamp: Date.now(),
        action: 'interaction-mousedown',
        x,
        y,
        color: getColor(),
        stroke: Math.floor(10 + Math.random() * 100),
        speed: Math.floor(3000 + Math.random() * 4000)
      })
    })
    el.addEventListener('mouseup', function (e) {
      moving = false
      const [x, y] = getCoordinates(e)
      emmiter.emit('sendmessage', {
        timestamp: Date.now(),
        action: 'interaction-mouseup',
        x,
        y
      })
    })
    let timeout
    let enabled = false
    function randomSpike () {
      timeout = setTimeout(() => {
        if (!enabled) {
          return randomSpike()
        }
        const x = 0.5 + Math.random() * 0.5
        const y = Math.random()
        emmiter.emit('sendmessage', {
          timestamp: Date.now(),
          action: 'interaction-mousedown',
          user: 'superuser',
          x,
          y,
          color: getColor(),
          stroke: Math.floor(10 + Math.random() * 100),
          speed: Math.floor(3000 + Math.random() * 4000)
        })
        emmiter.emit('sendmessage', {
          user: 'superuser',
          timestamp: Date.now() + 500 + Math.floor(Math.random() * 5000),
          action: 'interaction-mouseup',
          x,
          y
        })
        randomSpike()
      }, Math.floor(Math.random() * 1000 + 1000))
    }
    window.addEventListener('keydown', function (e) {
      if (e.key === 'q') {
        enabled = !enabled
      }
    })
    emmiter.on('newname', name => {
      if (name === 'klemen_presentation') {
        if (!timeout) {
          randomSpike()
        }
      } else if (timeout && name !== 'klemen_presentation') {
        clearTimeout(timeout)
        timeout = null
      }
    })
  })
}

function getCoordinates (event) {
  const { clientWidth, clientHeight } = document.documentElement
  const { clientX, clientY } = event
  return [clientX / clientWidth , clientY / clientHeight]
}

module.exports = store
