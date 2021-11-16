import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src='https://st.depositphotos.com/1563944/2419/i/600/depositphotos_24199705-stock-photo-three-close-mountain-peak.jpg'></img>
      <div className={classes.loginBloack}>
        {props.isAuth ? props.login : <NavLink to={'./login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
