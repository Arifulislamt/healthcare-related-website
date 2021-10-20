
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Doctors from './components/Doctors/Doctors';
import AuthProvider from './Contexts/AuthProvider';
import About from './components/About/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Services from './components/Services/Services';


function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/services/:userId">
            <Services></Services>
          </PrivateRoute>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
