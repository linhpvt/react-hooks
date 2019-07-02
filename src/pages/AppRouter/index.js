import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GlobalState from '../../contexts/GlobalContext';
import FormWizard01 from '../../components/FormWizard01';
import FormWizard02 from '../../components/FormWizard02';
import './app-router.scss';

const AppRouter = () => {
  // const { globalStore, dispatch } = useContext(GlobalContext);
  // console.log(globalStore, dispatch);
  return (
    <Router>
      <nav className="app-router-nav">
        <ul>
          <li><Link to="/form1">Form 1</Link></li>
          <li><Link to="/form2">Form 2</Link></li>
        </ul>
      </nav>
      <GlobalState>
      <Route path="/form1" exact component={FormWizard01} />
      <Route path="/form2" component={FormWizard02} />
      </GlobalState>
    </Router>
  );
}
export default AppRouter;