
import { IUser } from 'Types/User';
import { useQuery } from 'react-query';
import { getAllUsers } from 'services/backend-service';

const useUsersQuery = () => useQuery<IUser[]>('users', getAllUsers);

export default useUsersQuery;
