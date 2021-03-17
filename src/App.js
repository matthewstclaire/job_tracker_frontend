// import './App.css';
import DisplayJobs from './containers/DisplayJobs';
import JobsPage from './containers/JobsPage';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from './redux/actionCreators';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchJobs();
  }

  render() {
    return (
      <>
        <h1>JobTracker</h1>
        <Switch>
          <Route path="/jobs/:id" component={JobsPage} />
          <Route path="/jobs" component={DisplayJobs} />
        </Switch>
      </>
    );
  }
}

//this is simplified below
// const mapDispatchToProps = (dispatch) => ({
//   createJob: () => dispatchEvent({ type: 'CREATE_JOB' }),
// });

export default connect(null, { fetchJobs })(App);
