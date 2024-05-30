import { useSelector } from 'react-redux';

import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

import { selectUserIsSignedIn } from '../../redux/auth/slice';

import css from './AppBar.module.css';

// const isLoggedIn = false;
const AppBar = () => {
  const isLoggedIn = useSelector(selectUserIsSignedIn);

  return (
    <header className={css.header}>
      <nav className={css.headerList}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};

export default AppBar;
