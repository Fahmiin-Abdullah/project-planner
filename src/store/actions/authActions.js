import firebase from 'firebase'

export const signIn = credentials => {
  return (dispatch, getState) => {
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => dispatch({ type: 'SIGNIN_SUCCESS' }))
            .catch(err => dispatch({ type: 'SIGNIN_ERROR', err }))
  }
}