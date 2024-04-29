import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx([css.navigationLink], isActive && css.active);
};

const Navigation = () => {
  const isLoggedIn = true;
  return (
    <div className={css.navigationList}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
