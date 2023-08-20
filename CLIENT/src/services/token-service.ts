import { UserResponse } from 'assets/Types/types';
import { useMutation } from 'react-query';
import Client from './api-service';

export const verifyToken = async (token: string): Promise<UserResponse> => {
  const res = await Client.Backend.post<UserResponse>('/auth/login', {
    token,
  });
  
  return res.data;
};

export const useVerifyToken = () => useMutation(verifyToken);
