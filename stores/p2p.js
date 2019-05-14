var hypercore = require('hypercore')
var multifeed = require('multifeed')
var discovery = require('discovery-swarm')
var signalhub = require('signalhub')
var swarm = require('webrtc-swarm')
var pump = require('pump')

const dbName = 'knowabunga-prague-klemen-p2p-live'

function store (state, emmiter) {
  state.log = []
  state.peers = 0

  function logReducer ({finished = [], active = {}}, message = {}) {
    const {
      user, action, x, y, timestamp, color, stroke, speed
    }= message
    if (action === 'interaction-mousedown') {
      active[user] = { start: timestamp, x, y, color, stroke, speed }
    } else if (active[user]) {
      finished.push({
        ...active[user],
        end: timestamp
      })
      active[user] = undefined
    }
    const now = Date.now()
    return {
      finished: finished.filter(({ end  }) => !end || end + 7000 > now),
      active
    }
  }
  let logState = logReducer({})

  function addToLog (message) {
    logState = logReducer(logState, message)
    const { finished, active } = logState
    const aggregatedLog = finished.concat(Object.values(active).filter(e => e))
    state.log = aggregatedLog
    emmiter.emit('render')
  }

  emmiter.on('DOMContentLoaded', function () {
    emmiter.on('newname', function (name) {
      var multi = multifeed(hypercore, `${dbName}-${name}`, {
        valueEncoding: 'json'
      })

      multi.writer('local', function (err, feed) {
        multi.ready(function () {
          emmiter.emit('multi ready')
          const feeds = multi.feeds()
          feeds.forEach(feed => {
            const stream = feed.createReadStream({ live: true })
            stream.on('data', function (data) {
              addToLog(data)
              emmiter.emit(`feed:${data.action}`, data)
            })
          })
          multi.on('feed', function (feed) {
            emmiter.emit('new-feed')
            const stream = feed.createReadStream({ live: true })
            stream.on('data', function (data) {
              addToLog(data)
              emmiter.emit(`feed:${data.action}`, data)
            })
          })
        })
        feed.ready(function () {
          console.log('public key:', feed.key.toString('hex'))
          console.log('discovery key:', feed.discoveryKey.toString('hex'))
          console.log('secret key:', feed.secretKey.toString('hex'))
          // we use the discovery as the topic

          var hub = signalhub(dbName, ['https://signalhub-jccqtwhdwc.now.sh'])
          // var hub = signalhub(dbName)
          const sw = swarm(hub)
          // const sw = discovery()
          // sw.join('test-offline')

          sw.on('peer', function(peer, id) {
            state.peers += 1
            emmiter.emit('render')
            emmiter.emit('new-connection')
            // peer.on('close', function () {
            //   state.peers -= 1
            //   emmiter.emit('render')
            // })
            // peer.pipe(multi.replicate({ live: true, encrypt: true })).pipe(peer)
            pump(peer, multi.replicate({ live: true }), peer, console.log)
          })
          feed.createReadStream({ live: true}).on('data', function (data) {
          })

        })
        // 'feed' is a hypercore, just like before
        // except now we can manage many of them together!
        emmiter.on('sendmessage', message => (feed.append({
          user: name, ...message
        })))
      })
    })
  })
}

module.exports = store
