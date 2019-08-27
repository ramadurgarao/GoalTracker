import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LongTermGoals } from './components/longtermgoals/longtermgoals';
import { ShortTermGoals } from './components/shorttermgoals/shorttermgoals';
import { WeekendTask } from './components/weekendtasks/weekendtasks';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <h2>Go-aLs</h2>
        </div>        
        <nav class="nav-menu">
          <ul>
            <li><Link to="/LongTerm">Long Term Goals and Guidelines</Link></li>
            <li><Link to="/ShortTerm">Short Term Goals</Link></li>
            <li><Link to="/Weekend">Weekend Tasks</Link></li>
          </ul>          
        </nav>
        <Route path="/LongTerm" component={ LongTermGoals }/>
        <Route path="/ShortTerm" component={ ShortTermGoals }/>
        <Route path="/Weekend" component={ WeekendTask }/>
      </div>
    </Router>
    );
  }
}

export default App;
