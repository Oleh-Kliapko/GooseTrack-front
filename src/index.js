import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import './i18n';

import { App } from 'components/App';
import { ThemeContextProvider } from 'components/User/Header/ThemeToggler/ThemeContext';
import { store, persistor } from 'redux/store';
import { NotificationProvider } from 'helpers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="GooseTrack-front">
          <ThemeContextProvider>
            <NotificationProvider>
              <App />
            </NotificationProvider>
          </ThemeContextProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
