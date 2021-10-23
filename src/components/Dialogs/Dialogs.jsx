import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from '../Message/Message';

const Dialogs = (props) => {
  let DialogsElement = props.DialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));
  const MessegesElement = props.MessageData.map((el) => (
    <Messages id={el.id} text={el.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{DialogsElement}</div>
      <div className={classes.messages}>{MessegesElement}</div>
    </div>
  );
};
export default Dialogs;
