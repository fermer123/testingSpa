const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSEGE = 'SEND-MESSEGE';

const GenerateID = () => Date.now();

const dialogReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body; //переменная из вне
      return state;
    case SEND_MESSEGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.MessageData.push({
        id: GenerateID(),
        message: body,
      });
      return state;
    default:
      return state;
  }
};
export default dialogReducer;

export const UpdateNewMessegeBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text,
});
export const SendMessegeCreator = () => ({
  type: SEND_MESSEGE,
});
