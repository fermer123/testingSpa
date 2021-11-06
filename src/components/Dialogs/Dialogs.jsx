import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from '../Message/Message';
import Button from '@mui/material/Button';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let newMessageBody = state.newMessageBody;

  let DialogsElement = state.DialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));
  const MessegesElement = state.MessageData.map((el) => (
    <Messages id={el.id} text={el.message} />
  ));

  let onSendMessageClick = () => {
    props.SendMessege();
  }; // на клик отправки сообщения

  let onNewMessageChange = (e) => {
    let text = e.target.value;
    props.UpdateNewMessegeBody(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{DialogsElement}</div>
      <div className={classes.messages}>
        <div>{MessegesElement}</div>
        <div>
          <textarea
            placeholder={'enter your text'}
            value={newMessageBody} //чтобы визуально отображать, значения приходят из пропсов
            onChange={onNewMessageChange} //для того что бы он менялся, необходимо событие onChange, когда что то ввожу
            //срабатывает событие Onchange, внутри события делаем диспатч в бизнес, он там меняется и приходит с новым value
          ></textarea>
          <div>
            <Button variant='contained' onClick={onSendMessageClick}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
