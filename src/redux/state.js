import dialogReducer from './DialogReducer';
import profileReducer from './ProfileReducer';
import sideBarReducer from './SideBarReducer';

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
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
//сss position display margin padding
//typescript пока не учить
