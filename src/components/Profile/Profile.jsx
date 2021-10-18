import MyPosts from '../Profile/MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = () => {
  return (
    <div>
      <div>
        <div>
          <ProfileInfo />
          <MyPosts />
        </div>
      </div>
    </div>
  );
};
export default Profile;
