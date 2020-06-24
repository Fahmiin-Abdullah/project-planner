const initState = { projects: null }

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return true
    case 'CREATE_PROJECT_ERROR':
      return { projectError: action.err.message }
    default:
      return false
  }
}

export default projectReducer