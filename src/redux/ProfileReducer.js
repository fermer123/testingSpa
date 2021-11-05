const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const GenerateID = () => Date.now();

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST: //если тип равен посту то сделаем такие действия
      let newPost = {
        id: GenerateID(),
        post: state.newPostText,
        like: 10,
      };
      state.PostsData.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
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
