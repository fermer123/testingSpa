import { connect } from 'react-redux';
import { UnFollowAC, followAC, setUsersAC } from '../../redux/UserReducer';
import Users from './Users';

let mapStateToProps = (state) => {
  return {
    Users: state.usersPage.Users,
    pagesize: state.usersPage.pagesize,
    totalUsersCount: state.usersPage.debugger,
    currentPage: state.usersPage.currentPage,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
