import { useDispatch } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import { apiLoginUser } from '../../redux/auth/operations';
// import { selectUserIsSignedIn } from '../../redux/auth/slice';

import DocumentTitle from '../../components/DocumentTitle';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  // const isSignedIn = useSelector(selectUserIsSignedIn);

  const onLogin = (data) => {
    dispatch(apiLoginUser(data));
  };

  return (
    <div>
      <DocumentTitle>LoginPage</DocumentTitle>
      <LoginForm onLogin={onLogin} />
      {/* {!isSignedIn && <Navigate to="/login" />} */}
      {/* {isSignedIn && <Navigate to="/contacts" />} */}
    </div>
  );
};

export default LoginPage;
