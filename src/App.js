import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import HomePage from './Pages/HomePage/Homepage' ;
import AboutUs from './Pages/AboutUs/AboutUs' ;

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/#Services" exact component={HomePage} />
        <Route path="/login" exact component={Login}/>
        <Route path="/Signup" component={Signup}/>
        <Route path="/AboutUs" component={AboutUs}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
