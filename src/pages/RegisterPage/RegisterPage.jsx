import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../../redux/auth/operations';
import DocumentTitle from '../../components/DocumentTitle';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = (data) => {
    dispatch(apiRegisterUser(data));
  };

  return (
    <>
      <DocumentTitle>RegisterPage</DocumentTitle>
      <div>
        <RegisterForm onRegister={onRegister}></RegisterForm>
      </div>
    </>
  );
};

export default RegisterPage;
