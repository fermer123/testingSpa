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
        <Post message={PostsData[0].post} counts={PostsData[0].like} />
        <Post message={PostsData[1].post} counts={PostsData[1].like} />
        <Post message={PostsData[2].post} counts={PostsData[2].like} />
        <Post message={PostsData[3].post} counts={PostsData[3].like} />
        <Post message={PostsData[4].post} counts={PostsData[4].like} />
        <Post message={PostsData[5].post} counts={PostsData[5].like} />
      </div>
    </div>
  );
};
export default MyPosts;
