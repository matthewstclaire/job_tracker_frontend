import React from 'react';
import { connect } from 'react-redux';
import DisplayJob from './components/DisplayJob';

const DisplayJobs = props => {
  console.log(props.jobs);
  return (
    <div className="displayedJobs">
      {props.jobs.map(job => (
        <DisplayJob key={job.id} {...job} />
      ))}
    </div>
  );
};

const msp = state => ({
  jobs: state.jobs.jobs,
});

export default connect(msp)(DisplayJobs);
