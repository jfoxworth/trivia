import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './firebase/firebase'

const store = configureStore();


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.firebaseAuthIsReady.then(()=>{

  ReactDOM.render(jsx, document.getElementById('app'));

})
