import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
  let PostsDataElements = props.profilePage.map((el) => (
    <Post message={el.post} counts={el.like} />
  ));

  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addNewPost(text);
    newPostElement.current.value = '';
    // let postOnChange = () => {};
  };
  return (
    <div className={classes.postsBlock}>
      <h3>my post </h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            // onChange={postOnChange}
            value={props.newPostElement}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
        <button>Remove</button>
      </div>
      <div className={classes.posts}>{PostsDataElements}</div>
    </div>
  );
};
export default MyPosts;
