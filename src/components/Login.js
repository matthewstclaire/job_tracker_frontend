import React from 'react';
import { connect } from 'react-redux';
import {
  sendSignup,
  toggleSignup,
  handleLoginFormChange,
} from '../redux/actionCreators';
// import { handleLoginFormChange } from '../redux/actionCreators';

const Login = props => {
  const { signup, toggleSignup, form, handleLoginFormChange } = props;
  const { name, password, passwordConfirmation } = form;
  const onSubmit = e => {
    e.preventDefault();
    if (signup) {
      if (password === passwordConfirmation) {
        sendSignup({ name: name, password: password });
      } else {
        alert("Passwords don't match!");
      }
    }
  };

  console.log(props);

  return (
    <>
      <div className="loginForm">
        <h1>{signup ? 'Sign up!' : 'Login'}</h1>
        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
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
                Confirm Password:
                <input
                  type="password"
                  name="passwordConfirm"
                  value={passwordConfirmation}
                  onChange={handleLoginFormChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </>
          )}
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
})(Login);
