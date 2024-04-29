import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

import css from './AppBar.module.css';

const isLoggedIn = false;
const AppBar = () => {
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
