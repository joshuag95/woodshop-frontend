import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Profile from './Profile';
import Cart from './Cart';
import Products from './Products'
import { useEffect, useState } from 'react';
import {BrowserRouter as Router} from "react-router-dom";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentClient, setCurrentClient] = useState(null)

  useEffect(() => { 
    fetch("/profile")
    .then ((r) => {
      if (r.ok) {
        r.json().then((client)=> {
          setCurrentClient(client);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  if (!isAuthenticated) {
    return <div></div>;
  }

  return (
    <div className="App">
      <Router>{false ? <LoggedIn /> : <LoggedOut />}</Router>
      <NavBar />

      <Switch>
        <Route exact path= "/">
          <Home />
        </Route>

        <Route exact path= "/Profile">
          <Profile/>
        </Route>

        <Route exact path= '/mycart'>
          <Cart/>
        </Route>

        <Route exact path= '/products'>
          <Products/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
