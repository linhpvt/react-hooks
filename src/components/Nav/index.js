import React from 'react';
import { useStoreActions } from 'easy-peasy';
import Navigator from '../../constants/navigator';
import { getNavByTab } from '../../helpers';
import './nav.scss';

const Nav = () => {
  const { switchTo } = useStoreActions(actions => actions.switcher); 
  const switchTab = (tab) => (e) => {
    const navData = getNavByTab(tab);
    switchTo(navData);
  };
  const renderOneTab = nav => (
    <li key={nav.tab} onClick={switchTab(nav.tab)}>
      <a href={`#${nav.tab}`}>{nav.title}</a>
    </li>
  );
  return (
    <div className='nav'>
      <ul>
        {Navigator.map(tab => renderOneTab(tab))}
      </ul>
    </div>
  );
}
export default Nav;
