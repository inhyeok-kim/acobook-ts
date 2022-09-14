import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {databaseRegister} from './indexedDBRegistration';

async function systemInit(){
  await databaseRegister();
  
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  
  
  // serviceWorkerRegistration.register();
  
  root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
  );
}

systemInit();
