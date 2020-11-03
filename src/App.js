import React from 'react';
import Navbar from './components/Navbar';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/stranice/Home';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';




function App() {



  return (
    <>
        <Router>
            <Navbar />


                <Route path='/' exact component={Home}/>
                <Route path='/task3' component={Task3}/>
                <Route path='/task4' component={Task4}/>
                <Route path='/task5' component={Task5}/>

        </Router>

      </>

  );
}

export default App;
