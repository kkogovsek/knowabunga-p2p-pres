function store (state, emmiter) {
  state.surveyResults = {}
  state.doneSurveys = {}
  emmiter.on('survey:answer', function ({ survey, answer }) {
    state.doneSurveys[survey] = true
    emmiter.emit('sendmessage', { action: 'surveyanswer', survey, answer })
    emmiter.emit('render')
  })
  emmiter.on('feed:surveyanswer', function ({ survey, answer }) {
    if (!state.surveyResults[survey]) {
      state.surveyResults[survey] = {}
    }
    state.surveyResults[survey][answer] = (state.surveyResults[survey][answer] || 0) + 1
    emmiter.emit('render')
  })
}

module.exports = store
