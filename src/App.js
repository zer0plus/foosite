import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages'
import Menu from './pages/Menu'
import Register from './pages/Register'


function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" component = {Home} exact />
            <Route path="/menu" component = {Menu} exact />
            <Route path="/register" component = {Register} exact />
        </Switch>
    </Router>
  );
}

export default App;