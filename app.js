require("@babel/polyfill")
var css = require('sheetify')
var choo = require('choo')

css('tachyons')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(require('./stores/name.js'))
app.use(require('./stores/p2p'))
app.use(require('./stores/mouseHold'))
app.use(require('./stores/presentation.js'))
app.use(require('./stores/survey.js'))

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
