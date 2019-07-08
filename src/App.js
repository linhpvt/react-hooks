import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import EasypeasyPage from './pages/Easypeasy';
import AppRouter from './pages/AppRouter';
import Form from './pages/Form';
import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';

const App = () => {
  return (
    <>
      {/* top menu for each technology */}
      <Container fluid className="bg-info ptb-25">
        <Row className="w-100 border-0">
          <Col><a href="/">Easy Peasy</a></Col>
          <Col><a href="/app-router">Context API</a></Col>
          <Col><a href="/form">Bootstrap</a></Col>
        </Row>
      </Container>
      {/* main navigator to each route, which calls to server */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={EasypeasyPage} />
          <Route path="/app-router" component={AppRouter} />
          <Route path="/form" component={Form} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
