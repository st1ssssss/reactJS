import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { CircularProgress, CssBaseline } from '@mui/material';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/es/integration/react'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<CircularProgress />}>

        </PersistGate>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
