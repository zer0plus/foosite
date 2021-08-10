import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages'
import Menu from './pages/Menu'
import Register from './pages/Register'
import Login from './pages/Login'


function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" component = {Home} exact />
            <Route path="/menu" component = {Menu} exact />
            <Route path="/register" component = {Register} exact />
            <Route path="/login" component = {Login} exact />
            
        </Switch>
    </Router>
  );
}

export default App;