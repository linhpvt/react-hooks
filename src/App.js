import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EasypeasyPage from './pages/Easypeasy';
import AppRouter from './pages/AppRouter';
import './app.scss';
const App = () => {
  return (
    <>
      <nav className="app-nav">
        <ul>
          <li><a href="/">Easy Peasy</a></li>
          <li><a href="/app-router">Context API</a></li>
        </ul>
      </nav>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={EasypeasyPage} />
          <Route path="/app-router" component={AppRouter} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
