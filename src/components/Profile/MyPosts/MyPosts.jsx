import classes from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      <h3>my post </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
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
