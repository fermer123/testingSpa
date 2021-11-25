import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
  UpdateNewMessegeBodyCreator,
  SendMessegeCreator,
} from '../../redux/DialogReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    UpdateNewMessegeBody: (text) => {
      dispatch(UpdateNewMessegeBodyCreator(text));
    },
    SendMessege: () => {
      dispatch(SendMessegeCreator());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);
