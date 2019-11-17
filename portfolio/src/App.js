import React, {Fragment, useEffect} from 'react';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './components/intro/index';

import './App.css';


const App = () => {
       return (
     
     <Router>
     <Fragment>
          {/* <Navbar /> */}
          <Route exact path="/" component={Landing} />
          <section className="container">
          {/* <Alert /> */}
          <Switch>
          {/* <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />   */}
          </Switch>          
          </section>
     </Fragment>
     </Router>
)};
  
    
  
export default App;
