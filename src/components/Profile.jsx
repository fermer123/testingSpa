import './Profile.css';
const Profile = () => {
  return (
    <div className='content'>
      Content
      <img src='http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg'></img>
      <div> ava + descripton</div>
      <div>
        my post
        <div>new post</div>
      </div>
      <div className='posts'>
        <div className='item'>post 1</div>
        <div className='item'>post 2</div>
      </div>
    </div>
  );
};
export default Profile;
