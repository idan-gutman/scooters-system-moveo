import { useMutation } from 'react-query';
import { addNewParking } from 'services/backend-service';

function useAddNewParking() {
  return useMutation(addNewParking);
}

export default useAddNewParking;
