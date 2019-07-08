import React from 'react';
import { useStoreActions } from 'easy-peasy';
import Navigator from '../../constants/navigator';
import logo from '../../assets/images/logo.jpg';
import { getNavByTab } from '../../helpers';
import Cart from '../Cart';
import { Navbar,
  Nav,
  Form,
  Button,
  FormControl } from 'react-bootstrap';
import './navapp.scss';

const NavApp = () => {
  const { switchTo } = useStoreActions(actions => actions.switcher); 
  const switchTab = (tab) => (e) => {
    const navData = getNavByTab(tab);
    switchTo(navData);
  };
  const renderOneTab = nav => (
    <Nav.Link
      key={nav.tab}
      onClick={switchTab(nav.tab)}
      className="text-warning"
      href={`#${nav.tab}`}>
      {nav.title}
    </Nav.Link>
  );
  return (
  <Navbar bg="primary" expand="lg" id="todo-nav-app">
    <Navbar.Brand href="#home">
      <img className="logo rounded" src={logo} alt="Logo"/> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-warning" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {Navigator.map(item => renderOneTab(item))}
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        <Cart />
      </Form>
    </Navbar.Collapse>
  </Navbar>
  );
}
export default NavApp;
