import { Suspense } from 'react';

import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <header>
        <AppBar />
      </header>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
