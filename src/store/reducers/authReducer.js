const initState = { authError: null }

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'SIGNIN_SUCCESS':
      return {
        ...state, authError: null
      }
    case 'SIGNIN_ERROR':
      return {
        ...state, authError: 'Login failed'
      }
    default:
      return state
  }
}

export default authReducer