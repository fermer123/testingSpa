import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {
  AddPostActionCreator,
  UpdateNewPostTextActionCreator,
} from '../../../redux/ProfileReducer';
import Button from '@mui/material/Button';

const MyPosts = (props) => {
  let PostsDataElements = props.posts.map((el) => (
    <Post message={el.post} counts={el.like} key={el.id} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(AddPostActionCreator());
    newPostElement.current.value = '';
  };

  let postOnChange = () => {
    let text = newPostElement.current.value;
    let action = UpdateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>my post </h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={postOnChange}
            value={props.newPostElement}
          />
        </div>
        <div>
          <Button onClick={addPost} variant='contained'>
            Add post
          </Button>
        </div>
        <Button variant='contained' color='error'>
          Remove
        </Button>
      </div>
      <div className={classes.posts}>{PostsDataElements}</div>
    </div>
  );
};
export default MyPosts;
