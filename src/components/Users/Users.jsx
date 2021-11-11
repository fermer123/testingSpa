import styles from './User.module.css';
import Button from '@mui/material/Button';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {
  let getUsers = () => {
    if (props.Users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((respons) => {
          props.setUsers(respons.data.items);
        });
    }
  };
  return (
    <div>
      <Button variant='contained' onClick={getUsers}>
        push
      </Button>
      {props.Users.map((el) => (
        <div key={el.id}>
          <span>
            <div>
              <img
                src={el.photos.small != null ? el.photos.small : userPhoto}
                className={styles.userPhoto}
              />
            </div>
            <div>
              {el.followed ? (
                <Button
                  onClick={() => {
                    props.unFollow(el.id);
                  }}
                  variant='contained'
                >
                  unfollow
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    props.follow(el.id);
                  }}
                  variant='contained'
                >
                  follow
                </Button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{el.name}</div>
              <div>{el.status}</div>
            </span>
            <span>
              <div>{'el.location.country'}</div>
              <div>{el.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
