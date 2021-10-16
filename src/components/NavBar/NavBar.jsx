import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to='/Dialogs'>Messeges</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/News'>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music'>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='settings'>Settings</NavLink>
      </div>
    </nav>
  );
};
export default NavBar;
