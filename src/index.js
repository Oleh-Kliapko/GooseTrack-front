import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { ThemeContextProvider } from 'components/User/Header/ThemeToggler/ThemeContext';
import { store, persistor } from 'redux/store';
import './index.css';
import { NotificationProvider } from 'helpers';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="GooseTrack_front">
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
