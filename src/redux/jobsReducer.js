const initialJobState = {
  jobs: [],
};

const jobsReducer = (state = initialJobState, action) => {
  // console.log('Jobs reducer', state);
  switch (action.type) {
    case 'SET_JOBS':
      return { ...state, jobs: action.payload };
    default:
      return { ...state };
  }
};

export default jobsReducer;
