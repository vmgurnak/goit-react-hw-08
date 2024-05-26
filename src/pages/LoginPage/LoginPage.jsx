import DocumentTitle from '../../components/DocumentTitle';
import LoginForm from '../../components/LoginForm/LoginForm';

import { useDispatch, useSelector } from 'react-redux';

const LoginPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <DocumentTitle>LoginPage</DocumentTitle>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
