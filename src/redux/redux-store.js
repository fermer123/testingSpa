import { combineReducers, createStore } from 'redux';
import dialogReducer from './DialogReducer';
import profileReducer from './ProfileReducer';
import sideBarReducer from './SideBarReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  sideBar: sideBarReducer,
});

let store = createStore(reducers);

export default store;
