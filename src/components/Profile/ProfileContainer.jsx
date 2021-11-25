import { compose } from 'redux';
import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserProfile } from '../../redux/ProfileReducer';
import Profile from './Profile';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStatetoProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStatetoProps, { getUserProfile }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
