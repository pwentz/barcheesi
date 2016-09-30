const reducer = (state = { userLocation: '' }, action) => {
  switch(action.type) {
    case 'SET_COORDINATES':
      return {
        ...state,
        userLocation: action.data
      }
    default:
      return state
  }
}

export default reducer;
