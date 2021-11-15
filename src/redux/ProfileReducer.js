const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const GenerateID = () => Date.now();

let initialState = {
  PostsData: [
    { id: 1, like: 1, post: 'my first post1' },
    { id: 2, like: 2, post: 'my first post2' },
    { id: 3, like: 3, post: 'my first post2' },
    { id: 4, like: 4, post: 'my first post4' },
    { id: 5, like: 5, post: 'my first post5' },
    { id: 6, like: 6, post: 'my first post6' },
  ],
  newPostText: '',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      //если тип равен посту то сделаем такие действия

      let newPost = {
        id: GenerateID(),
        post: state.newPostText,
        like: 10,
      };
      return {
        ...state,
        PostsData: [...state.PostsData, newPost],
        newPostText: '',
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};
export default profileReducer;

export const AddPostActionCreator = () => ({
  type: ADD_POST,
});

export const UpdateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
