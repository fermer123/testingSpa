import { connect } from 'react-redux';
import {
  UnFollowAC,
  followAC,
  setUsersAC,
  setCurrentPageAC,
  setUsersTotalCountAC,
  toggleIsFetchingAC,
} from '../../redux/UserReducer';
import * as axios from 'axios';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then((respons) => {
        this.props.toggleIsFetching(false);

        this.props.setUsers(respons.data.items);
        this.props.setTotalUsersCount(respons.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
      )
      .then((respons) => {
        this.props.toggleIsFetching(false);

        this.props.setUsers(respons.data.items);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          Users={this.props.Users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          userPhoto={this.props.userPhoto}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    Users: state.usersPage.Users,
    pagesize: state.usersPage.pagesize,
    totalUsersCount: state.usersPage.debugger,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID));
    },
    unFollow: (userID) => {
      dispatch(UnFollowAC(userID));
    },
    setUsers: (Users) => {
      dispatch(setUsersAC(Users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
