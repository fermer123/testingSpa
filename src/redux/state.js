const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSEGE = 'SEND-MESSEGE';

let store = {
  _state: {
    profilePage: {
      PostsData: [
        { id: 1, like: 1, post: 'my first post1' },
        { id: 2, like: 2, post: 'my first post2' },
        { id: 3, like: 3, post: 'my first post2' },
        { id: 4, like: 4, post: 'my first post4' },
        { id: 5, like: 5, post: 'my first post5' },
        { id: 6, like: 6, post: 'my first post6' },
      ],
      newPostText: '',
    },
    dialogsPage: {
      DialogsData: [
        { id: 1, name: 'Igor' },
        { id: 2, name: 'any user1' },
        { id: 3, name: 'any user2' },
        { id: 4, name: 'any user3' },
        { id: 5, name: 'any user4' },
        { id: 6, name: 'any user5' },
      ],
      MessageData: [
        { id: 0, message: ' hello Igor' },
        { id: 1, message: 'any message1' },
        { id: 2, message: 'any message2' },
        { id: 3, message: 'any message3' },
        { id: 4, message: 'any message4' },
        { id: 5, message: 'any message5' },
      ],
      newMessageBody: '',
    },
    sideBar: {},
  },
  _callSubscriber() {
    console.log('state is changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    console.log(action);
    //если тип равен посту то сделаем такие действия
    if (action.type === ADD_POST) {
      let newPost = {
        id: 6,
        post: this._state.profilePage.newPostText,
        like: 10,
      };
      this._state.profilePage.PostsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body; //переменная из вне
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSEGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.MessageData.push({
        id: 6,
        message: body,
      });
      this._callSubscriber(this._state);
    }
  },
};

export const AddPostActionCreator = () => ({
  type: ADD_POST,
});

export const UpdateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const UpdateNewMessegeBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text,
});
export const SendMessegeCreator = () => ({
  type: SEND_MESSEGE,
});

export default store;
