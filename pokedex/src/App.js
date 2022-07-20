import Router from './routes/Router'
import GlobalState from './global/GlobalState';
import React from 'react';


function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
