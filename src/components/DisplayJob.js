//functional stateless

import React from 'react';
import { Link } from 'react-router-dom';

const DisplayJob = props => {
  

  return (
    <div className="jobContainer">
      <div className="job-item-title">
        <p>{props.title}</p>
      </div>

      <div className="job-item-company">
        <p>{props.company}</p>
      </div>

      <div className="job-item-dateApplied">
        <p>{props.dateApplied}</p>
      </div>

      <div className="job-item-interest">
        <p>{props.interest}</p>
      </div>
      <div className="job-item-appliedOn">
        <p>{props.appliedOn}</p>
      </div>
      <div className="job-item">
        <button>
          <Link to={'jobs/' + props.id}>More Info</Link>
        </button>
      </div>
    </div>
  );
};

export default DisplayJob;
