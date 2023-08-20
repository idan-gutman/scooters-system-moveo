import { IFavorites } from 'assets/Types/location.types';
import { LoginPayload, UserResponse } from 'assets/Types/types';
import { useMutation } from 'react-query';
import { IUser } from 'Types/User';
import { Failure, Scooter } from 'Types/Scooter';
import { Parking } from 'Types/Parking';
import Client from './api-service';
import { loadFromStorage, saveToStorage } from './storage-service';

export const postLogin = async (data: LoginPayload) => {
  const res = await Client.Backend.post<UserResponse>('/auth/login/', data);
  saveToStorage('user', res.data);
  return res.data;
};

export const usePostLogin = () => useMutation(postLogin);

export const getAllScooters = async () => {
  try {
    const { token } = loadFromStorage('user');
    const response = await Client.Backend.get<Scooter[]>('/scooters', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch scooters');
  }
};

export const getAllUsers = async () => {
  try {
    const { token } = loadFromStorage('user');
    const response = await Client.Backend.get<IUser[]>('/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

export const getAllParkings = async () => {
  try {
    const { token } = loadFromStorage('user');
    const response = await Client.Backend.get<Parking[]>('/parkings', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch parkings');
  }
};

export const fetchScooterFailures = async (scooterId: string) => {
  try {
    const { token } = loadFromStorage('user');
    const response = await Client.Backend.get<Failure[]>(
      `/failures/${scooterId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch Failures');
  }
};

export const fetchScooterFailureHistory = async (scooterId: string) => {
  try {
    const { token } = loadFromStorage('user');
    const response = await Client.Backend.get<Failure[]>(
      `/failures/history/${scooterId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch History');
  }
};

export const addNewParking = async (newParkingData: Parking) => {
  try {
    const { token } = loadFromStorage('user');
    const response = await Client.Backend.post<Parking[]>(
      '/parkings',
      newParkingData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to add New Parking');
  }
};

export const deleteParkingSpot = async (parkingId: string) => {
  try {
    const { token } = loadFromStorage('user');
    const response = await Client.Backend.delete(`/parkings/${parkingId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch History');
  }
};
