import {
  UpdateNewMessegeBodyCreator,
  SendMessegeCreator,
} from '../../redux/DialogReducer';
import storeContext from '../../storeContext';

import Dialogs from './Dialogs';

const DialogsContainer = () => {
  return (
    <storeContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;
        let onSendMessageClick = () => {
          store.dispatch(SendMessegeCreator());
        }; // на клик отправки сообщения

        let onNewMessageChange = (text) => {
          store.dispatch(UpdateNewMessegeBodyCreator(text));
        };

        return (
          <Dialogs
            UpdateNewMessegeBody={onNewMessageChange}
            SendMessege={onSendMessageClick}
            dialogsPage={state}
          />
        );
      }}
    </storeContext.Consumer>
  );
};
export default DialogsContainer;
