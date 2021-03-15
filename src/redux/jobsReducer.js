const initialJobState = {
  jobs: [],
};

const jobsReducer = (state = initialJobState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default jobsReducer;
