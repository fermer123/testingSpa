import classes from '../Dialogs/Dialogs.module.css';

const Messages = (props) => {
  return <div className={classes.dialog}>{props.text}</div>;
};

export default Messages;
