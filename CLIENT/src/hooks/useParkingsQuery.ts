import { Parking } from 'Types/Parking';
import { Scooter } from 'Types/Scooter';
import { useQuery } from 'react-query';
import { getAllParkings } from 'services/backend-service';

const useParkingsQuery = () => useQuery<Parking[]>('parkings', getAllParkings);

export default useParkingsQuery;
