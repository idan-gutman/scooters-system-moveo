import { useMutation, useQueryClient } from 'react-query';
import { deleteParkingSpot } from 'services/backend-service';

function useDeleteParking() {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteParkingSpot, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return { ...mutation };
}

export default useDeleteParking;
