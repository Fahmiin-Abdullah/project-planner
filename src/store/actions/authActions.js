import firebase from 'firebase'

export const signIn = credentials => {
  return (dispatch, getState) => {
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => dispatch({ type: 'SIGNIN_SUCCESS' }))
            .catch(err => dispatch({ type: 'SIGNIN_ERROR', err }))
  }
}

export const signOut = () => {
  return (dispatch, getState) => {
    firebase.auth().signOut()
            .then(() => dispatch({ type: 'SIGNOUT_SUCCESS' }))
  }
}

export const signUp = newUser => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(res => {
              return firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
              })
            })
            .then(() => dispatch({ type: 'SIGNUP_SUCCESS' }))
            .catch(err => dispatch({ type: 'SIGNUP_ERROR', err }))
  }
}