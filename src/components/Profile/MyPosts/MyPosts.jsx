import classes from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  let PostsData = [
    { id: 1, like: 1, post: 'my first post1' },
    { id: 2, like: 2, post: 'my first post2' },
    { id: 3, like: 3, post: 'my first post2' },
    { id: 4, like: 4, post: 'my first post4' },
    { id: 5, like: 5, post: 'my first post5' },
    { id: 6, like: 6, post: 'my first post6' },
  ];
  let PostsDataElements = PostsData.map((el) => (
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
