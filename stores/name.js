function store (state, emmiter) {
  state.name = ''
  emmiter.on('setnewname', name => {
    console.log('yup', name)
    state.name = name
    emmiter.emit('newname', name)
    emmiter.emit('render')
  })
}

module.exports = store
