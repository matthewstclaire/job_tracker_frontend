export const createJob = () => ({ type: 'CREATE_JOB' });

export const fetchJobs = () => {
  return dispatch => {
    fetch('http://localhost:3000/jobs')
      .then(resp => resp.json())
      .then(jobs =>
        dispatch({
          type: 'SET_JOBS',
          payload: jobs,
        })
      );
  };
};
