import { useQuery } from 'react-query';
import { fetchScooterFailureHistory } from 'services/backend-service';

export const useScooterFailureHistory = (scooterId: string) =>
  useQuery(
    ['scooterFailureHistory', scooterId],
    () => fetchScooterFailureHistory(scooterId),
    {
      enabled: false,
    }
  );
