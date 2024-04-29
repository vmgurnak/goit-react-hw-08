import DocumentTitle from '../../components/DocumentTitle';

import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.homePageWrap}>
        <h1>
          Welcome contacts manager!
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
};
export default HomePage;
