
// Standard
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';
import { firebaseReducer } from 'react-redux-firebase';


// Reducers
import questionsReducer from './reducers/questions';
import authReducer from './reducers/authReducer';
import tagsReducer from './reducers/tags';
import gamesReducer from './reducers/games';

import config from '../firebase/firebase';

export default () => {
  const store = createStore(
    combineReducers({
      auth:authReducer,
      questions: questionsReducer,
      tags: tagsReducer,
      games:gamesReducer,
      firestore: firestoreReducer,
      firebase:firebaseReducer
    }),
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reduxFirestore(config, firebase),
      reactReduxFirebase(config, {useFirestoreForProfile:true, userProfile:'users', attachAuthIsReady:true}),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

    return store;
};
