import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './app-router.scss';

const FormWizard01 = () => {
  return (
    <h1>FormWizard 01</h1>
  )
};

const FormWizard02 = () => {
  return (
    <h1>FormWizard 02</h1>
  )
};
const AppRouter = () => {
  return (
    <Router>
      <nav className="app-router-nav">
        <ul>
          <li><Link to="/form1">Form 1</Link></li>
          <li><Link to="/form2">Form 2</Link></li>
        </ul>
      </nav>
      <Route path="/form1" exact component={FormWizard01} />
      <Route path="/form2" component={FormWizard02} />
    </Router>
  );
}
export default AppRouter;