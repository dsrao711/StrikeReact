import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login}/>
        {/* <Route path="/loginteacher" component={LoginTeacher}/> */}
        <Route path="/Signup" component={Signup}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
