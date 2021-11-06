import React from 'react';
import {
  AddPostActionCreator,
  UpdateNewPostTextActionCreator,
} from '../../../redux/ProfileReducer';
import storeContext from '../../../storeContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  return (
    <storeContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(AddPostActionCreator());
        };

        let postOnChange = (text) => {
          let action = UpdateNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        return (
          <MyPosts
            posts={state.profilePage.PostsData}
            UpdateNewPostText={postOnChange}
            addPost={addPost}
            // newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </storeContext.Consumer>
  );
};
export default MyPostsContainer;
