import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog + ' ' + classes.active}>
          <NavLink to='/Dialogs/1'>Igor </NavLink>
        </div>
        <div className={classes.dialog + ' ' + classes.active}>
          <NavLink to='/Dialogs/2'>any User </NavLink>
        </div>
        <div className={classes.dialog + ' ' + classes.active}>
          <NavLink to='/Dialogs/3'>any Userany User1 </NavLink>
        </div>
        <div className={classes.dialog + ' ' + classes.active}>
          <NavLink to='/Dialogs/4'>any Userany User2 </NavLink>
        </div>
        <div className={classes.dialog + ' ' + classes.active}>
          <NavLink to='/Dialogs/5'>any Userany User3 </NavLink>
        </div>
        <div className={classes.dialog + ' ' + classes.active}>
          <NavLink to='/Dialogs/6'>any Userany User4 </NavLink>
        </div>
        <div className={classes.dialog + ' ' + classes.active}>
          <NavLink to='/Dialogs/7'>any Userany User5 </NavLink>
        </div>
        <div className={classes.dialog + ' ' + classes.active}>
          <NavLink to='/Dialogs/8'>any Userany User </NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>How are u </div>
        <div className={classes.message}>Hi hi</div>
        <div className={classes.message}>Hi hi hi</div>
      </div>
    </div>
  );
};
export default Dialogs;
