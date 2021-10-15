import classes from './Profile.module.css';
const Profile = () => {
  return (
    <div className={classes.content}>
      <img src='http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg'></img>
      <div> ava + descripton</div>
      <div>
        my post
        <div>new post</div>
      </div>
      <div className={classes.posts}>
        <div className={classes.item}>post 1</div>
        <div className={classes.item}>post 2</div>
      </div>
    </div>
  );
};
export default Profile;
