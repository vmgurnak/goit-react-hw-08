import AppBar from '../AppBar/AppBar';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <AppBar />
      </header>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
