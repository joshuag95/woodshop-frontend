import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path= "/">
          <Home />
        </Route>

        <Route exact path= "/Profile">
          <Profile/>
        </Route>

        <Route exact path= '/'>
          <Cart/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
