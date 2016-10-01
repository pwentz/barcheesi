const reducer = (state = { userLocation: '', venues: [] }, action) => {
  switch(action.type) {
    case 'SET_COORDINATES':
      return {
        ...state,
        userLocation: action.data
      }

    case 'SET_VENUES':
      return {
        ...state,
        venues: action.data
      }

    default:
      return state
  }
}

export default reducer;
