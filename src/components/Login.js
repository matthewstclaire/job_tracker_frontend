import React from 'react';
import { connect } from 'react-redux';
import { toggleSignup } from '../redux/actionCreators';
import { handleLoginFormChange } from '../redux/actionCreators';

const Login = props => {
  const { signup, toggleSignup, form, handleLoginFormChange } = props;
  const { name, password, passwordConfirmation } = form;
  return (
    <>
      <div className="loginForm">
        <h1>{signup ? 'Sign up!' : 'Login'}</h1>
        <form>
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
})(Login);
