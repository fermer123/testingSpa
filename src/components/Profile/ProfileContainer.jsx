import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { getUserProfile } from '../../redux/ProfileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'} />;

    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStatetoProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

let WithRouterURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStatetoProps, { getUserProfile })(
  WithRouterURLDataContainerComponent,
);
