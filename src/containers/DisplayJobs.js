import React from 'react';
import { connect } from 'react-redux';
import DisplayJob from '../components/DisplayJob';
import Filters from '../components/Filters'

const DisplayJobs = props => {
  debugger
  const searchedJobs = () => props.jobs.filter(job => job.company.toLowerCase().includes(props.search.toLowerCase()))
  
  return (
  <>
  <Filters/>
    <div className="displayedJobs">
      {props.jobs.map(job => (
        <DisplayJob key={job.id} {...job} />
      ))}
    </div>
    </>
  );
};

const msp = state => ({
  jobs: state.jobs.jobs,
  ...state.jobs.filtersForm
});

export default connect(msp)(DisplayJobs);
