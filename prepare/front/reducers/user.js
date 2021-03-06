
export const initialState = {
  logInLoading: false,
  loginDone: false,
  loginError: null,
  
  logoutLoading: false,
  logoutDone: false,
  logoutFailure: null,
  
  
  me: null,
  signUpData: {},
  loginData: {},
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const loginRequestAction = (data) => ({
      type: LOG_IN_REQUEST,
      data,
  });

export const logoutRequestAction = () => ({
      type: LOG_OUT_REQUEST,
});

const dummyUser = (data) => ({
  ...data,
  nickname: '제로초',
  id: 1,
  Posts: [{ id: 1 }],
});

const reducer  = (state = initialState, action) => {
    switch(action.type){
      case LOG_IN_REQUEST:
        return {
          ...state,
          logInLoading: true,
          loginError: null,
          loginDone: false,
        };

      case LOG_IN_SUCCESS:
        return{
            ...state,
            logInLoading: false,
            loginDone: true,
            me: dummyUser(action.data),
        };

      case LOG_IN_FAILURE:
        return{
            ...state,
            logInLoading: false,
            loginError: action.error,
            me: action.data,
        };

      case LOG_OUT_REQUEST:
        return{
          ...state,
          logoutLoading: true,
          logoutError: null,
          logoutDone: false,
        }

      case LOG_OUT_SUCCESS:
        return{
          ...state,
          logoutLoading: false,
          logoutDone: true,
          me: null,
        }

      case LOG_OUT_FAILURE:
        return{
          ...state,
          logoutLoading: false,
          logoutError: action.error,
        }

      default:
        return {
          ...state,
        }
    }
};



export default reducer;