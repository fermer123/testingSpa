import { connect } from 'react-redux';
import {
  unfollow,
  follow,
  setCurrentPage,
  getUsers,
  toggleFollowingProgress,
} from '../../redux/UserReducer';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pagesize);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pagesize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pagesize={this.props.pagesize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          Users={this.props.Users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    Users: state.usersPage.Users,
    pagesize: state.usersPage.pagesize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
  }),
)(UsersContainer);
