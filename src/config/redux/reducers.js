const initialState = {
    state: {
        arrowShow: false
    }
  }
  
  export default function appReducer(state = initialState, action) {
    switch (action.type) {
      case 'arrow':
          const result = state
          result.state.arrowShow = action.payload
          return result
      default:
        return state
    }
  }