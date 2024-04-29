import css from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={css.userMenuWrap}>
      <p className={css.userMenuText}>Welcome, user user@mail.com</p>
      <button className={css.userMenuBtn} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
