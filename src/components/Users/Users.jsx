import styles from './User.module.css';
import Button from '@mui/material/Button';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';
import { ReactReduxContext } from 'react-redux';
import React from 'react';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((respons) => {
        this.props.setUsers(respons.data.items);
      });
  }
  render() {
    let pagesCount = this.props.totalUsersCount / this.props.pageSize;
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
                className={this.props.currentPage === p && styles.selectedPage}
              >
                {p}
              </span>
            );
          })}
          <span className={styles.selectedPage}>2</span> <span>3</span>{' '}
          <span>4</span>
          <span>5</span>
        </div>
        {this.props.Users.map((el) => (
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
                      this.props.unFollow(el.id);
                    }}
                    variant='contained'
                  >
                    unfollow
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      this.props.follow(el.id);
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
  }
}

export default Users;
