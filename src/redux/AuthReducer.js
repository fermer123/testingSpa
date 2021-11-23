import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const GenerateID = () => Date.now();

let initialState = {
  UserId: null,
  email: 'null',
  login: 'null',
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const setAuthUserData = (UserId, email, login) => ({
  type: SET_USER_DATA,
  data: {
    UserId,
    email,
    login,
  },
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((respons) => {
    if (respons.data.resultCode === 0) {
      let { id, email, login } = respons.data.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
};

export default authReducer;
