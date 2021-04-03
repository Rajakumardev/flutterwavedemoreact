import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Listing from './Pages/Listing';
import Payment from './Pages/Payment';

function App() {
  return (
    <div className="">
      <Router>
        <Link to="/listing">Products</Link>
        <hr />
        <Switch>
          <Route exact path='/' component={Listing} />
          <Route exact path='/listing' component={Listing} />
          <Route exact path='/payment/:type' component={Payment} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
