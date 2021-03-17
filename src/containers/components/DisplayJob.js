import React from 'react';
import { Link } from 'react-router-dom';

const DisplayJob = props => {
  return (
    <div className="jobContainer">
      <div className="jobItem title">
        <p>{props.title}</p>
      </div>

      <div className="jobItem company">
        <p>{props.company}</p>
      </div>

      <div className="jobItem dateApplied">
        <p>{props.date_applied}</p>
      </div>

      <div className="jobItem interest">
        <p>{props.interest}</p>
      </div>
      <div className="jobItem">
        <p>{props.applied_on}</p>
      </div>
      <div className="jobItem">
        <button>
          <Link to={'jobs/' + props.id}>More Info</Link>
        </button>
      </div>
    </div>
  );
};

export default DisplayJob;
