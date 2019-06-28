import React from 'react';
import { useStoreState } from 'easy-peasy';

import Home from '../Home';
import About from '../About';
const Components = {
  Home,
  About,
};

const Switcher = () => {
  const { comp } = useStoreState(state => state.switcher);
  const ShowComponent = Components[comp];
  return <ShowComponent />
}
export default Switcher;