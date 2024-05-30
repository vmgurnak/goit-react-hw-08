import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { selectUserIsSignedIn } from '../../redux/auth/slice';

import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx([css.navigationLink], isActive && css.active);
};

const Navigation = () => {
  const IsSignedIn = useSelector(selectUserIsSignedIn);
  // const IsSignedIn = true;
  return (
    <div className={css.navigationList}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {IsSignedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
