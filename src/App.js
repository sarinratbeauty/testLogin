import React from 'react';
import './App.css';
import Login from './components/page/Login'
import Homepage from './components/page/Homepage'
import { Router} from "@reach/router"

function App() {
  return (
    <div className="App">
     <Router >
        <Login path="/" />
        <Homepage path="/homepage" />
      </Router>
    </div>
  );
}

export default App;
