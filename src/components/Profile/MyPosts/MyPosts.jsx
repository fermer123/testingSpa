import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import Button from '@mui/material/Button';

const MyPosts = (props) => {
  let PostsDataElements = props.posts.map((el) => (
    <Post message={el.post} counts={el.like} key={el.id} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    newPostElement.current.value = '';
  };

  let postOnChange = () => {
    let text = newPostElement.current.value;
    props.UpdateNewPostText(text);
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
          <Button onClick={onAddPost} variant='contained'>
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
