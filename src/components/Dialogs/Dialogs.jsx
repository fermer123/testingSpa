import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from '../Message/Message';

const Dialogs = (props) => {
  let DialogsData = [
    { id: 1, name: 'Igor' },
    { id: 2, name: 'any user1' },
    { id: 3, name: 'any user2' },
    { id: 4, name: 'any user3' },
    { id: 5, name: 'any user4' },
    { id: 6, name: 'any user5' },
  ];
  let MessageData = [
    { id: 0, message: ' hello Igor' },
    { id: 1, message: 'any message1' },
    { id: 2, message: 'any message2' },
    { id: 3, message: 'any message3' },
    { id: 4, message: 'any message4' },
    { id: 5, message: 'any message5' },
  ];

  let DialogsElement = DialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));
  const MessegesElement = MessageData.map((el) => (
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
