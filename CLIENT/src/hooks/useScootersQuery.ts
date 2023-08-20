import { Scooter } from 'Types/Scooter';
import { useQuery } from 'react-query';
import { getAllScooters } from 'services/backend-service';

const useScootersQuery = () => useQuery<Scooter[]>('scooters', getAllScooters);

export default useScootersQuery;
