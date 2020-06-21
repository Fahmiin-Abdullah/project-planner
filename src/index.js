import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from './App'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/firebaseConfig'
import firebase from 'firebase/app'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig)
  )
)

const reactReduxFirebaseProps = { firebase, config: fbConfig, dispatch: store.dispatch, createFirestoreInstance }

ReactDOM.render(
  <Provider store={ store }>
    <ReactReduxFirebaseProvider { ...reactReduxFirebaseProps }>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
