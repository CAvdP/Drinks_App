// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
// Components //
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';





// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

// Check if user is still logged in //
if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

// Static nav and page, only content changes by the use of the react-router //
class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div className="page">
              <Navbar />    
                <div className="content">
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                  <Route exact path="/" component={ Home } />
                </div>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;