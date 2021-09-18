import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Components/Register";
// import Login from "./Components/Login";
// import HealthTips from './Components/HealthTips/HealthTips';
import Profile from './Page/Profile/Profile';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/register" component={Register} />
        <Route exact path='/profile' component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
