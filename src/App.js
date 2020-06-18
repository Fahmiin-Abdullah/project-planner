import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/project/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/auth/CreateProject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Dashboard } />
            <Route path="/project/:id" component={ ProjectDetails } />
            <Route path="/sign-in" component={ SignIn } />
            <Route path="/sign-up" component={ SignUp } />
            <Route path="/create" component={ CreateProject } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
