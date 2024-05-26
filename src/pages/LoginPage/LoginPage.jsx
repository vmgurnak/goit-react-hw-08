import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../../redux/auth/operations';

import DocumentTitle from '../../components/DocumentTitle';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = (data) => {
    dispatch(apiLoginUser(data));
  };

  return (
    <div>
      <DocumentTitle>LoginPage</DocumentTitle>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;
