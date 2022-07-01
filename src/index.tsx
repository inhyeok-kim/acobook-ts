import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from 'src/redux/RootReducer';
import data from 'src/datas/data';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

window.databse = data;

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// serviceWorkerRegistration.register();

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

