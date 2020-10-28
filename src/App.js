import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import useRoutes from './routes';

function App() {
  const routes = useRoutes(true)
  return (
      <React.Fragment>
        {routes}
      </React.Fragment>
  );
}

export default App;
