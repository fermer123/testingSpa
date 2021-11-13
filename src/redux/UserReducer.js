const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const GenerateID = () => Date.now();

let initialState = {
  Users: [],
  pageSize: 5,
  totalUsersCount: 0,
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
      return { ...state, Users: action.Users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };
    default:
      return state;
  }
};

export const followAC = (UserId) => ({ type: FOLLOW, UserId });
export const UnFollowAC = (UserId) => ({ type: UNFOLLOW, UserId });
export const setUsersAC = (Users) => ({ type: SET_USERS, Users });
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});

export default UserReducer;
