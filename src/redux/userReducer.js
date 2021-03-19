const initialLoginForm = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const initialState = {
  id: null,
  username: null,
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
          //if the payload's name is user
          // update undername key in the loginForm in state with new payload value
          ...state.loginForm,
          [action.payload.name]: action.payload.value,
        },
      };
    case 'SET_USER':
      console.log({ ...state, ...action.payload.user });
      return { ...state, ...action.payload.user };
    default:
      return { ...state };
  }
};

export default userReducer;
