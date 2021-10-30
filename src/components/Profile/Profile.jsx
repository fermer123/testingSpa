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
            newPostText={props.profilePage.addPost}
            updateNewPostText={props.updateNewPostText}
            addPost={props.addPost}
          />
        </div>
      </div>
    </div>
  );
};
export default Profile;
