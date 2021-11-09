import { connect } from 'react-redux';
import Users from './Users';

let mapStateToProps = () => {
  return {
    Users: state.UsersPage.Users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID));
    },
    UnFollow: (userID) => {
      dispatch(UnFollowAC(userID));
    },
    setUsers: (Users) => {
      dispatch(setUsersAC(Users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
