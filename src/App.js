// import './App.css';
import DisplayJobs from './containers/DisplayJobs';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createJob } from './redux/actionCreators';

class App extends Component {
  compenentDidMount() {
    console.log('this.props');
  }

  render() {
    return (
      <>
        <h1>Title</h1>
        <DisplayJobs />
      </>
    );
  }
}

//this is simplified below
// const mapDispatchToProps = (dispatch) => ({
//   createJob: () => dispatchEvent({ type: 'CREATE_JOB' }),
// });

export default connect(null, { createJob })(App);
