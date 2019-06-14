import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import {
  Login,
  Signup,
  Home,
  MyEducations,
  MyExperiances,
  MySkills,
  ContactMe,
  Header,
  Footer,
  PageNotFound,
} from './Components';


export default class App extends Component{
  state={
    islogged:true,
    userInfo: null,
  }
  render(){
    const {islogged} = this.state;
    return(
      <>
      <Router>
      <Header islogged={islogged} />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component={Home} />
            <Route exact path="/my-edu" component={MyEducations} />
            <Route exact path="/my-exp" component={MyExperiances} />
            <Route exact path="/my-skills" component={MySkills} />
            <Route exact path="/contact-me" component={ContactMe} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
      </Router>
      </>
    )
  }
}

