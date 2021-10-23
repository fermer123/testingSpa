import MyPosts from '../Profile/MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
  return (
    <div>
      <div>
        <div>
          <ProfileInfo />
          <MyPosts PostsData={props.PostsData} />
        </div>
      </div>
    </div>
  );
};
export default Profile;
