import './App.css';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router} from "react-router-dom";


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentClient, setCurrentClient] = useState(null)
 


  useEffect(() => { 
    fetch("/clients")
    .then ((r) => {
      if (r.ok) {
        r.json().then((client)=>  {
          console.log(client)
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
      <Router>{false ? <LoggedIn /> : <LoggedOut setCurrentClient = {setCurrentClient} />}</Router>
      
    </div>
  );
}

export default App;
