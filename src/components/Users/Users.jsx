import styles from './User.module.css';
import Button from '@mui/material/Button';
import userPhoto from '../../assets/images/user.png';
import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
                  onClick={() => {
                    axios
                      .delete(
                        //delete и get принимает только два параметра, POST принимает 3 параметра
                        `https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                        { withCredentials: true }, //Авторизация
                        {
                          headers: {
                            'API-KEY': '9b3f4cf1-b449-4bcc-94e4-65bb6856dd6d',
                          },
                        },
                      )
                      .then((respons) => {
                        if (respons.data.resultCode == 0) {
                          props.UnFollow(el.id);
                        }
                      });
                  }}
                  variant='contained'
                >
                  unfollow
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                        {},
                        { withCredentials: true },
                        {
                          headers: {
                            'API-KEY': '9b3f4cf1-b449-4bcc-94e4-65bb6856dd6d',
                          },
                        },
                      )
                      .then((respons) => {
                        if (respons.data.resultCode == 0) {
                          props.follow(el.id);
                        }
                      });
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
