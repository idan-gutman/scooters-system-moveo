import useAuth from 'hooks/useAuth';
import { FC } from 'react';
import {
  Navigate,
  Outlet,
  useLocation,
} from 'react-router-dom';

export const ProtectedRoute: FC = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth ? (
    <Outlet />
  ) : (
    <Navigate replace to='/' state={{ from: location }} />
  );
};
