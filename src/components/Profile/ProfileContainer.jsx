import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setUserProfile } from '../../redux/ProfileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((respons) => {
        this.props.setUserProfile(respons.data);
      });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStatetoProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithRouterURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStatetoProps, { setUserProfile })(
  WithRouterURLDataContainerComponent,
);
