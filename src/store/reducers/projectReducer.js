const initState = {
  projects: [
    { id: 1, title: 'help me find some peaches', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, aut!' },
    { id: 2, title: 'collect all the honey stars', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, aut!' },
    { id: 3, title: 'egg hunting with mom', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, aut!' }
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('cretae project error', action.err)
    default:
      return false
  }
}

export default projectReducer