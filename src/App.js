import logo from './logo.svg';
import './App.css';
import * as Yup from 'yup';
import { useHistory,useEffect } from "react-router-dom";
import Navibar from './Components/Navibar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Navbar, Nav, NavDropdown, Carousel } from 'react-bootstrap';
import Register from './Components/Register'
import Login from './Components/Login';
import Userlogin from './Components/Userlogin';
import Userdetails from './Components/Userdetails';
import Contactus from './Components/Contactus';

function App() {
  return (
    <div className="App">
    
    <Router>
        <div >
         

          <Switch>
          <Route exact path="/" component={Navibar} />        
            <Route protected path="/Register" component={Register} />
            <Route protected path="/Login" component={Login} />
            <Route exact path="/Userlogin" component={Userlogin} />
            <Route exact path="/Userdetails" component={Userdetails} />
            <Route exact path="/Contactus" component={Contactus} />

            

        

          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
