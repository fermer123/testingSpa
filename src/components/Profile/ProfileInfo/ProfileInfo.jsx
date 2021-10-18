import classes from './ProfileInfo.module.css';
const ProfileInfo = () => {
  return (
    <div>
      <div></div>
      <div>
        <img src='http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg'></img>
      </div>
      <div className={classes.descriptiomBlock}> ava + descripton</div>
    </div>
  );
};
export default ProfileInfo;
