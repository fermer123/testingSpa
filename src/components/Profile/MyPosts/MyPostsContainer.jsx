import React from 'react';
import {
  AddPostActionCreator,
  UpdateNewPostTextActionCreator,
} from '../../../redux/ProfileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(AddPostActionCreator());
  };

  let postOnChange = (text) => {
    let action = UpdateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      posts={state.profilePage.PostsData}
      UpdateNewPostText={postOnChange}
      addPost={addPost}
      // newPostText={state.profilePage.newPostText}
    />
  );
};
export default MyPostsContainer;
