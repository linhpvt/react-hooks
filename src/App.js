import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from './containers/Home';
// import About from './containers/About';
import Header from './components/Header';

import { StoreProvider } from 'easy-peasy';
import Store from './store';
import Switcher from './containers/Switcher';

const App = () => {
  return (
    <>
    <StoreProvider store={Store}>
      <Header />
      <Switcher />
      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Redirect from="/contact" to="/invoices/dashboard" />
        </Switch>
      </BrowserRouter> */}
    </StoreProvider>
    </>
  );
}

export default App;
