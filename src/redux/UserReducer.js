const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const GenerateID = () => Date.now();

let initialState = {
  Users: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 1,
};

let UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        Users: state.Users.map((el) => {
          if (el.id === action.UserId) {
            return { ...el, followed: true };
          }
          return el;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        Users: state.Users.map((el) => {
          if (el.id === action.UserId) {
            return { ...el, followed: false };
          }
          return el;
        }),
      };
    case SET_USERS:
      return { ...state, Users: [...action.Users] };
    default:
      return state;
  }
};

export const followAC = (UserId) => ({ type: FOLLOW, UserId });
export const UnFollowAC = (UserId) => ({ type: UNFOLLOW, UserId });
export const setUsersAC = (Users) => ({ type: SET_USERS, Users });

export default UserReducer;
