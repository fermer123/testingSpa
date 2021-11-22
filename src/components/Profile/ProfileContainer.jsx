import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
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
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStatetoProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithRouterURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStatetoProps, { getUserProfile })(
  WithRouterURLDataContainerComponent,
);
