import classes from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div>
      my post
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={classes.posts}>
        <Post message='check video about props' counts='20' />
        <Post message='props ' counts='30' />
      </div>
    </div>
  );
};
export default MyPosts;
