import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HealthTips from './Components/HealthTips/HealthTips';
import Profile from './Page/Profile/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Profile} />
        <Route exact path='/healthtips' component={HealthTips} />
      </Switch>
    </Router>
  );
}

export default App;
