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
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name='Igor' id='1' />
        <DialogItem name='any user1' id='2' />
        <DialogItem name='any user2' id='3' />
        <DialogItem name='any user3' id='3' />
        <DialogItem name='any user4' id='4' />
        <DialogItem name='any user5' id='5' />
      </div>
      <div className={classes.messages}>
        <Messages text='hellow Igor' />
        <Messages text='any user1' />
        <Messages text='any user2' />
        <Messages text='any user3' />
        <Messages text='any user4' />
        <Messages text='any user5' />
      </div>
    </div>
  );
};
export default Dialogs;
