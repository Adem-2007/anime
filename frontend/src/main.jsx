import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { store, persistor }  from './store/Store'; // Import the Redux store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='bg-gray-900 z-0'> 
          <App/>
        </div>
       
      </PersistGate>
    </Provider>
  </StrictMode>
)
