import { combineReducers, createStore } from 'redux';
import authReducer from './AuthReducer';
import dialogReducer from './DialogReducer';
import profileReducer from './ProfileReducer';
import sideBarReducer from './SideBarReducer';
import UserReducer from './UserReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  sideBar: sideBarReducer,
  usersPage: UserReducer,
  auth: authReducer,
});

let store = createStore(reducers);

export default store;
