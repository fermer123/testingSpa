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
      photoUrl:
        'https://kubnews.ru/upload/iblock/ba2/ba2cc9fa383e672568a551fe49b46a3f.jpg',
    },
    {
      id: 2,
      followed: true,
      fullName: 'Dima',
      status: 'Pre intermediate boss',
      location: { city: 'Chertanovo', country: 'San Francisco' },
      photoUrl:
        'https://kubnews.ru/upload/iblock/ba2/ba2cc9fa383e672568a551fe49b46a3f.jpg',
    },
    {
      id: 3,
      followed: false,
      fullName: 'nobody',
      status: 'sos',
      location: { city: 'miasskoe', country: 'England' },
      photoUrl:
        'https://kubnews.ru/upload/iblock/ba2/ba2cc9fa383e672568a551fe49b46a3f.jpg',
    },
  ],
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
      return { ...state, Users: [...state, ...action.Users] }; // когда добавляю к существующим, а когда перезатираю и создаю новое
    default:
      return state;
  }
};

export const followAC = (UserId) => ({ type: FOLLOW, UserId });
export const UnFollowAC = (UserId) => ({ type: UNFOLLOW, UserId });
export const setUsersAC = (Users) => ({ type: SET_USERS, Users });

export default UserReducer;
