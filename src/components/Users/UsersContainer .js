import { connect } from 'react-redux';
import {
  UnFollow,
  follow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from '../../redux/UserReducer';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { UsersApi } from '../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    UsersApi.getUsers(this.props.currentPage, this.props.pagesize).then(
      (data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      },
    );
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);

    UsersApi.getUsers(pageNumber, this.props.pagesize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
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
          UnFollow={this.props.UnFollow}
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
  };
};

export default connect(mapStateToProps, {
  follow,
  UnFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
