import { ProtectedRoute } from 'auth/ProtectedRoute';
import { Layout } from 'components/Layout/Layout';
import Login from 'features/Login/Login';
import { HomePage } from 'features/pages/HomePage/HomePage';
import { PageNotFound } from 'features/pages/PageNotFound';
import Parking from 'features/pages/Parking/Parking';
import Users from 'features/pages/Users/Users';
import { Navigate, Route, Routes } from 'react-router-dom';

const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path='/' element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/home' element={<HomePage />} />
        <Route path='/parking' element={<Parking />} />
        <Route path='/users' element={<Users />} />
        <Route path='*' element={<Navigate to='/home' replace />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Route>
  </Routes>
);
export default AppRoutes;
