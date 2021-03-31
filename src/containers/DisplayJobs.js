//container

import React from 'react';
import { connect } from 'react-redux';
import DisplayJob from '../components/DisplayJob';
import Filters from '../components/Filters'
import JobHeader from '../components/Headers'

const DisplayJobs = (props) => {
  
  // debugger
 

  // const searchedJobs = props.jobs.filter(job => {
  //   return job.company.toLowerCase().includes(props.search.toLowerCase())
  // })

  // const searchedJobs = props.jobs.filter(job => {
  //   return job.company.toLowerCase().includes(props.search.toLowerCase()
  // })
 

const searchedJobs = props.jobs.filter(job => job.company.toLowerCase().includes(props.search.toLowerCase()))

  return (
  <>
  <Filters/>
  <JobHeader />
    <div className="displayedJobs">
      {searchedJobs.map(job => (
        <DisplayJob key={job.id} {...job} />
      ))}
    </div>
    </>
  );
};

const mapStateToProps = state => ({
  jobs: state.jobs.jobs,
  search: state.jobs.filtersForm.search
});

export default connect(mapStateToProps)(DisplayJobs);
