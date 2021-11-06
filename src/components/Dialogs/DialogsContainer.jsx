import {
  UpdateNewMessegeBodyCreator,
  SendMessegeCreator,
} from '../../redux/DialogReducer';

import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(SendMessegeCreator());
  }; // на клик отправки сообщения

  let onNewMessageChange = (text) => {
    props.store.dispatch(UpdateNewMessegeBodyCreator(text));
  };
  return (
    <Dialogs
      UpdateNewMessegeBody={onNewMessageChange}
      SendMessege={onSendMessageClick}
      dialogsPage={state}
    />
  );
};
export default DialogsContainer;
