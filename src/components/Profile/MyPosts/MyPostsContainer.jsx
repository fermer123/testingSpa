import React from 'react';
import { connect } from 'react-redux';
import {
  AddPostActionCreator,
  UpdateNewPostTextActionCreator,
} from '../../../redux/ProfileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.PostsData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateNewPostText: (text) => {
      let action = UpdateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(AddPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
