export const createJob = () => ({ type: 'CREATE_JOB' });

export const fetchJobs = () => {
  return dispatch => {
    console.log("c")
    fetch('http://localhost:3000/jobs')
      .then(resp => resp.json())
      .then(jobs => {
        console.log("d")
        dispatch({
          type: 'SET_JOBS',
          payload: jobs,
        })
      })
      .catch((error) => {
        console.error('Error:', error);
      });    
  };
};

// export const fetchJobs = () => {
//   return dispatch => {
//     fetch('http://localhost:3000/jobs')
//       .then(resp => resp.json())
//       .then(jobs =>

//         dispatch({
//           type: 'SET_JOBS',
//           payload: jobs,
//         })
//       )
//       .catch( err => {
//         err.text().then( errorMessage => {
//           this.props.dispatch(displayTheError(errorMessage))
//         })
//       })
//   };
// };

export const setSelectedJob = id => {
  
  return dispatch => {
    fetch('http://localhost:3000/jobs/' + id)
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
    fetch("http://localhost:3000/login", {
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
    fetch("http://localhost:3000/login", {
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
    fetch("http://localhost:3000/autologin", {
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

export const jobFormChange = e => ({
  type: 'ADD_JOB',
  payload: { name: e.target.name, value: e.target.value },
});

export const submitNewJob = (newJobData) => {
  return dispatch => {
    fetch('http://localhost:3000/jobs/' , {
      method: 'POST',
      headers: {
        'Authorization': localStorage.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJobData)
    })
    .then(res => res.json())
    .then(job => dispatch({
      type: "ADD_JOB",
      payload: job
    }))
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.clear("token")
    dispatch({type: "LOGOUT"})
  }
}

export const handleSearchFormChange = e => ({
  type: 'FILTERS_FORM_CHANGE',
  payload: { name: e.target.name, value: e.target.value },
});


// export const submitNewJob = (jobData) => {
//   return dispatch => {
//     fetch('http://localhost:3000/jobs/', {
//       method: 'POST', // or 'PUT'
//       headers: {
//         'Authorization': localStorage.token,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(jobData)
//     })
//     .then(res=> res.json())
//     .then(newJob => dispatch({
//       type: "JOB_FORM_CHANGE",
//       payload: newJob
//     }))
//   }
// }