import React, { useState }  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Setting from './Components/Pages/Setting';
import User from './Components/Pages/User';
import Upload from './Components/Pages/Upload';
import LogOut from './Components/Pages/Log-out';



function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <>
    <div className="App">

    
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Setting' component={Setting} />
          <Route path='/User' component={User} />
          <Route path='/Upload' component={Upload} />
          <Route path='/Log-out' component={LogOut} />
      </Switch>

      </Router>
      
      </div>
    </>  
  );
}

export default App;
