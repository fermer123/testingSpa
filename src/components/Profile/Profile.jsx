import MyPosts from '../Profile/MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
  return (
    <div>
      <div>
        <div>
          <ProfileInfo />
          <MyPosts
            posts={props.profilePage.PostsData}
            dispatch={props.dispatch}
          />
        </div>
      </div>
    </div>
  );
};
export default Profile;
