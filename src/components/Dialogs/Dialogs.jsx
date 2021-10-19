import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/Dialogs/' + props.id;
  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path}>{props.name} </NavLink>
    </div>
  );
};

const Messages = (props) => {
  return <div className={classes.dialog}>{props.text}</div>;
};
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
    { id: 0, message: 'Igor' },
    { id: 1, message: 'any message1' },
    { id: 2, message: 'any message2' },
    { id: 3, message: 'any message3' },
    { id: 4, message: 'any message4' },
    { id: 5, message: 'any message5' },
  ];
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
        <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
        <DialogItem name={DialogsData[2].name} id={DialogsData[2].id} />
        <DialogItem name={DialogsData[3].name} id={DialogsData[3].id} />
        <DialogItem name={DialogsData[4].name} id={DialogsData[4].id} />
        <DialogItem name={DialogsData[5].name} id={DialogsData[5].id} />
      </div>
      <div className={classes.messages}>
        <Messages id={MessageData[0].id} text={MessageData[0].message} />
        <Messages id={MessageData[1].id} text={MessageData[1].message} />
        <Messages id={MessageData[2].id} text={MessageData[2].message} />
        <Messages id={MessageData[3].id} text={MessageData[3].message} />
        <Messages id={MessageData[4].id} text={MessageData[4].message} />
        <Messages id={MessageData[5].id} text={MessageData[5].message} />
      </div>
    </div>
  );
};
export default Dialogs;
