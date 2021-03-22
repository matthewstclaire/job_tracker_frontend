import DisplayJobs from './containers/DisplayJobs';
import JobsPage from './containers/JobsPage';
import Login from './components/Login';
// import CreateJob from './components/CreateJob';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs, autoLogin } from './redux/actionCreators';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  componentDidMount() {
    // debugger
    localStorage.token && this.props.autoLogin();
    this.props.fetchJobs();
  }

render() {
  return (
    <>
      <h1>JobTracker</h1>
      {this.props.user.id 
      ? 
        <>
        <Switch>
          <Route path="/jobs/:id" component={JobsPage} />
          <Route path="/jobs" component={DisplayJobs} />
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

export default connect(mapStateToProps, { fetchJobs, autoLogin })(App);
