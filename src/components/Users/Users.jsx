import styles from './User.module.css';
import Button from '@mui/material/Button';
import userPhoto from '../../assets/images/user.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pagesize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && styles.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.Users.map((el) => (
        <div key={el.id}>
          <span>
            <div>
              <NavLink to={'/profile' + el.id}>
                <img
                  src={el.photos.small != null ? el.photos.small : userPhoto}
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {el.followed ? (
                <Button
                  disabled={props.followingInProgress.some((id) => id == el.id)}
                  onClick={() => {
                    props.unfollow(el.id);
                  }}
                  variant='contained'
                >
                  unfollow
                </Button>
              ) : (
                <Button
                  disabled={props.followingInProgress.some((id) => id == el.id)}
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
              <div>{'el.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
