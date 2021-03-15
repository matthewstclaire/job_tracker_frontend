export const createJob = () => ({ type: 'CREATE_JOB' });

export const getJobs = () => {
  return fetch('http://localhost:3000')
    .then((resp) => resp.json())
    .then();
};
