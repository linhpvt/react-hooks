import React from 'react';
import { StoreProvider } from 'easy-peasy';
import Header from '../../components/Header';
import Store from '../../store';
import Switcher from '../../containers/Switcher';

const App = () => (
  <StoreProvider store={Store}>
    <Header />
    <Switcher />
  </StoreProvider>
);

export default App;
