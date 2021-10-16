import MyPosts from '../Profile/MyPosts/MyPosts';
import classes from './Profile.module.css';
const Profile = () => {
  return (
    <div className={classes.content}>
      <img src='http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg'></img>
      <div> ava + descripton</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
