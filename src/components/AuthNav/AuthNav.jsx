import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx([css.authNavLink], isActive && css.active);
};

const AuthNav = () => {
  return (
    <div className={css.authNavList}>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
