const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const GenerateID = () => Date.now();

let initialState = {
  Users: [
    {
      id: 1,
      followed: true,
      fullName: 'Igor',
      status: 'boss',
      location: { city: 'Chelyabinsk', country: 'Russia' },
    },
    {
      id: 2,
      followed: true,
      fullName: 'Dima',
      status: 'Pre intermediate boss',
      location: { city: 'Chertanovo', country: 'San Francisco' },
    },
    {
      id: 3,
      followed: false,
      fullName: 'nobody',
      status: 'sos',
      location: { city: 'miasskoe', country: 'England' },
    },
  ],
  newPostText: '',
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
      return { state, Users: [...state, ...action.Users] };
    default:
      return state;
  }
};

export const followAC = (UserId) => ({ type: FOLLOW, UserId });
export const UnFollowAC = (UserId) => ({ type: UNFOLLOW, UserId });
export const setUsersAC = (Users) => ({ type: SET_USERS, Users });

export default UserReducer;
