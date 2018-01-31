const getStateFromStorage = () => {
  let state = JSON.parse(window.localStorage.getItem('kodofilm2'))
  if (state && state.location) {
    delete state.location
  }
  return state
}

const storeStateInStorage = (state) => {
  window.localStorage.setItem('kodofilm2', JSON.stringify(state))
  console.log(getStateFromStorage())
}

export {getStateFromStorage, storeStateInStorage}
