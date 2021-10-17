import classes from './Dialogs.module.css';
const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog + ' ' + classes.active}>Igor</div>
        <div className={classes.dialog}>any User</div>
        <div className={classes.dialog}>any User1</div>
        <div className={classes.dialog}>any User2</div>
        <div className={classes.dialog}>any User3</div>
        <div className={classes.dialog}>any User4</div>
        <div className={classes.dialog}>any User5</div>
        <div className={classes.dialog}>any User6</div>
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
