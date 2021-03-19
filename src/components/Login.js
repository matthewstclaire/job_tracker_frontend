import React from 'react';
import { connect } from 'react-redux';
import {
  sendSignup,
  toggleSignup,
  handleLoginFormChange,
  sendLogin,
} from '../redux/actionCreators';
// import { handleLoginFormChange } from '../redux/actionCreators';

const Login = props => {
  const {
    signup,
    toggleSignup,
    form,
    handleLoginFormChange,
    sendSignup,
    sendLogin,
  } = props;
  const { username, password, passwordConfirmation } = form;

  const onSubmit = e => {
    e.preventDefault();
    if (signup) {
      if (password === passwordConfirmation) {
        sendSignup({ username: username, password: password });
      } else {
        alert("Passwords don't match!");
      }
    } else {
      sendLogin({ username: username, password: password });
    }
  };

  return (
    <>
      <h1>{signup ? 'Sign up!' : 'Login'}</h1>
      <div className="loginForm">
        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleLoginFormChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleLoginFormChange}
            />
          </label>
          {signup && (
            <>
              <label>
                Password Confirmation:
                <input
                  type="password"
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={handleLoginFormChange}
                />
              </label>
            </>
          )}
          <input type="submit" value="submit" />
        </form>
        <button onClick={toggleSignup}>
          Or...{signup ? 'Login' : 'Sign up!'}
        </button>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  signup: state.user.signup,
  form: state.user.loginForm,
});

export default connect(mapStateToProps, {
  toggleSignup,
  handleLoginFormChange,
  sendSignup,
  sendLogin,
})(Login);
