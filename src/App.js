// src/App.js
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import history from './services/history';
import AppWrapper from './AppWrapper';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <AppWrapper />
        </Router>
      </PersistGate>
    </Provider>
  );
}
