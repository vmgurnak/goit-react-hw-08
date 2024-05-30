import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import css from './UserMenu.module.css';

import { useSelector } from 'react-redux';
import { selectUserData } from '../../redux/auth/selectors';
import { apiLogoutUser } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const userEmail = userData.email;

  const onLogout = () => {
    dispatch(apiLogoutUser());
  };

  return (
    <div className={css.userMenuWrap}>
      <p className={css.userMenuText}>Welcome, {userEmail}</p>
      <button className={css.userMenuBtn} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
