import { connect } from 'react-redux';
import {
  UpdateNewMessegeBodyCreator,
  SendMessegeCreator,
} from '../../redux/DialogReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
