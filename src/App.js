import Logo from "./logo.png"
import DisplayJobs from './containers/DisplayJobs';
import JobsPage from './containers/JobsPage';
import Login from './components/Login';
import JobForm from './components/JobForm';
import About from './components/About'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs, autoLogin, logout } from './redux/actionCreators';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBarContainer from './containers/NavBarContainer';

class App extends Component {
  componentDidMount() {
    // debugger
    localStorage.token && this.props.autoLogin();
    console.log("a")
    this.props.fetchJobs();
    console.log("b")
  }

render() {
  return (
    <>
      <img src={Logo} alt="Tigerhead logo"/>
      
      {this.props.user.id
      
      ? 
        <>
        <NavBarContainer />
        {/* <button onClick={logout}>Log Out</button> */}
        <Switch>
          <Route path="/create" component={JobForm} />
          <Route path="/jobs/:id" component={JobsPage} />
          <Route path="/jobs" component={DisplayJobs} />
          <Route  path="/about" component={ About }/>
          <Route path="/" component={ DisplayJobs } />
        </Switch>
        </>
       : 
        <Login />
      }
    </>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.user });

//this is simplified below
// const mapDispatchToProps = (dispatch) => ({
//   createJob: () => dispatchEvent({ type: 'CREATE_JOB' }),
// });

export default connect(mapStateToProps, { fetchJobs, autoLogin, logout })(App);
