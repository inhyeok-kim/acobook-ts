import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from 'src/redux/RootReducer';
import {databaseRegister} from './indexedDBRegistration';

async function systemInit(){
  const store = createStore(rootReducer);
  await databaseRegister();
  
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
}

systemInit();
