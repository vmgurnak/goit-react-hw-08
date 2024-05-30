import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserIsSignedIn } from '../../redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);

  return !isSignedIn ? <Navigate to={redirectTo} replace /> : children;
};

export default PrivateRoute;
