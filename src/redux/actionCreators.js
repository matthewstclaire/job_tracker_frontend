export const createJob = () => ({ type: 'CREATE_JOB' });

export const fetchJobs = () => {
  return dispatch => {
    fetch('http://localhost:3001/jobs')
      .then(resp => resp.json())
      .then(jobs =>

        dispatch({
          type: 'SET_JOBS',
          payload: jobs,
        })
      );
  };
};

export const setSelectedJob = id => {
  return dispatch => {
    fetch('http://localhost:3001/jobs/' + id)
      .then(resp => resp.json())
      .then(jobs =>
        dispatch({
          type: 'SET_SELECTED_JOB',
          payload: jobs,
        })
      );
  };
};

export const unsetJob = () => ({
  type: 'UNSET_JOB',
});

export const toggleSignup = () => ({
  type: 'TOGGLE_SIGNUP',
});

export const handleLoginFormChange = e => ({
  type: 'LOGIN_FORM_CHANGE',
  payload: { name: e.target.name, value: e.target.value },
});

export const sendSignup = (userData) => {
  return dispatch => {
    // localhost:3000/users
    fetch("http://localhost:3001/login", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(response => {
      localStorage.token = response.token
      dispatch({
      type: "SET_USER",
      payload: {user: response.user}
    })
  })
  }
}

export const sendLogin = (userData) => {
  return dispatch => {
    // localhost:3000/users
    fetch("http://localhost:3001/login", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(response => {
      localStorage.token = response.token
      dispatch({
      type: "SET_USER",
      payload: {user: response.user}
    })
  })
  }
}

export const autoLogin = () => {
  return dispatch => {
    // localhost:3000/users
    fetch("http://localhost:3001/autologin", {
      method: 'POST', // or 'PUT'
      headers: {
        'Authorization': localStorage.token,
      },
    })
    .then(response => response.json())
    .then(response => {
      dispatch({
      type: "SET_USER",
      payload: {user: response.user}
    })
  })
  }
}
