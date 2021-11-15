import Preloader from '../../common/Preloader/Preloader';

import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div></div>
      <div>
        <img src='http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg'></img>
      </div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} /> ava + descripton
      </div>
    </div>
  );
};
export default ProfileInfo;
