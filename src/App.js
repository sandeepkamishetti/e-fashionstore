import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import ContactPage from './containers/ContactPage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import MyOrdersPage from './containers/MyOrdersPage';
import NotFoundPage from './containers/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch> {/* Switch is used to avoid every page routing to Not Found Page because of the * in the Route component */}
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/myorders" component={MyOrdersPage} />
        <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
