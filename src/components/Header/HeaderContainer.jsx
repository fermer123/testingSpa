import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/AuthReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        WithCredentials: true,
      })
      .then((respons) => {
        if (respons.data.resultCode === 0) {
          let { id, email, login } = respons.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
  }
  render() {
    console.log(this.props);

    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
