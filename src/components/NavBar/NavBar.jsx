import classes from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <a href='/profile'>Profile</a>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <a href='/Dialogs'>Messeges</a>
      </div>
      <div className={classes.item}>
        <a>News</a>
      </div>
      <div className={classes.item}>
        <a>Music</a>
      </div>
      <div className={classes.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};
export default NavBar;
