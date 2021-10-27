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
            profilePage={props.profilePage.PostsData}
            addNewPost={props.addNewPost}
            newPostText={props.addNewPost}
            updateNewPostText={props.updateNewPostText}
          />
        </div>
      </div>
    </div>
  );
};
export default Profile;
