const initialLoginForm = {
  name: '',
  password: '',
  passwordConfirmation: '',
};

const initialState = {
  id: null,
  name: null,
  signup: false,
  loginForm: initialLoginForm,
};

const userReducer = (state = initialState, action) => {
  // console.log('Jobs reducer', state);
  switch (action.type) {
    case 'TOGGLE_SIGNUP':
      return { ...state, signup: !state.signup };
    case 'LOGIN_FORM_CHANGE':
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [action.payload.name]: action.payoad,
        },
      };
    default:
      return { ...state };
  }
};

export default userReducer;
