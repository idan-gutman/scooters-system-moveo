import { useQuery } from 'react-query';
import { fetchScooterFailures } from 'services/backend-service';

export const useScooterFailures = (scooterId:string) =>
  useQuery(
    ['scooterFailures', scooterId],
    () => fetchScooterFailures(scooterId),
    {
      enabled: false,
    }
  );
