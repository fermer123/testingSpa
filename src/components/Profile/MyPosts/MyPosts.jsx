import classes from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
  let PostsDataElements = props.appState.map((el) => (
    <Post message={el.post} counts={el.like} />
  ));
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
      <div className={classes.posts}>{PostsDataElements}</div>
    </div>
  );
};
export default MyPosts;
