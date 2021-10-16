import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://sun9-81.userapi.com/s/v1/ig2/D3r0uxLYycMoT6LIxDkxocJXIBq6ruCHidXAKxbDT36YdCDsHcXVmvj_H5C3kNUVRar31z2ExBJhIQ2kFixET8gl.jpg?size=200x200&quality=96&crop=10,0,950,950&ava=1'></img>
      {props.message}
      <div>
        <span>likes: {props.counts}</span>
      </div>
    </div>
  );
};
export default Post;
