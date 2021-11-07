const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSEGE = 'SEND-MESSEGE';

const GenerateID = () => Date.now();

let initialState = {
  DialogsData: [
    { id: 1, name: 'Igor' },
    { id: 2, name: 'any user1' },
    { id: 3, name: 'any user2' },
    { id: 4, name: 'any user3' },
    { id: 5, name: 'any user4' },
    { id: 6, name: 'any user5' },
  ],
  MessageData: [
    { id: 0, message: ' hello Igor' },
    { id: 1, message: 'any message1' },
    { id: 2, message: 'any message2' },
    { id: 3, message: 'any message3' },
    { id: 4, message: 'any message4' },
    { id: 5, message: 'any message5' },
  ],
  newMessageBody: '',
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      state.newMessageBody = action.body; //переменная из вне
      return state;
    }
    case SEND_MESSEGE: {
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.MessageData.push({
        id: GenerateID(),
        message: body,
      });
      return state;
    }
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
