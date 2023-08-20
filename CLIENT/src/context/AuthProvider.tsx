import { UserResponse } from 'assets/Types/types';
import useLocalStorage from 'hooks/useLocalStorage';
import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useMemo,
} from 'react';
import { useVerifyToken } from 'services/token-service';

interface IAuthContext {
  auth: UserResponse | null;
  setAuth?: Dispatch<SetStateAction<UserResponse | null>>;
}
const AuthContext = createContext<IAuthContext>({ auth: null });

export const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useLocalStorage<UserResponse | null>('user', null);

  const value = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
