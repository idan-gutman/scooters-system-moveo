import SessionContext from 'context/SessionProvider';
import { useContext } from 'react';

const useSession = () => useContext(SessionContext);

export default useSession;
