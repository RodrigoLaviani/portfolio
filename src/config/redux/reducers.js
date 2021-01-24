const initialState = {
    state: {
        arrowShow: false,
        isSpanish: false
    }
  }
  
  export default function appReducer(state = initialState, action) {
    switch (action.type) {
      case 'arrow':
          state.state.arrowShow = action.payload
          return state
      case 'change_language':
          state.state.isSpanish = action.payload
          return state
      default:
        return state
    }
  }