import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/header';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';

export default function AppWrapper() {
  const location = useLocation();
  const hideHeaderRoutes = ['/']; // Oculta Header na página de login

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  );
}
