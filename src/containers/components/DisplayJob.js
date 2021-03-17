import React from 'react';

const DisplayJob = props => {
  return (
    <div className="jobContainer">
      <div className="jobItem title">
        <p>{props.title} |</p>
      </div>

      <div className="jobItem dateApplied">
        <p>{props.date_applied} |</p>
      </div>
      <div className="jobItem company">
        <p>{props.company} |</p>
      </div>

      <div className="jobItem interest">
        <p>{props.interest} |</p>
      </div>
      <div className="jobItem">
        <p>{props.applied_on} |</p>
      </div>
      {/* <div className="jobItem nextSteps">
        <p>{props.next_steps}</p> */}
      {/* </div> */}
    </div>
  );
};

export default DisplayJob;
