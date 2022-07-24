import Router from './routes/Router'
import GlobalState from './global/GlobalState';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <GlobalState>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router />
    </GlobalState>
  );
}

export default App;
