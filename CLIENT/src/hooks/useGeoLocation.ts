import { Position } from 'assets/Types/types';
import { useCallback, useEffect, useState } from 'react';
import useAuth from './useAuth';

export const useGeoLocation = (onError?: PositionErrorCallback) => {
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const { auth } = useAuth();
  const onSuccess = (position: Position) => {
    const { latitude, longitude } = position.coords;
    setUserLocation(`${latitude},${longitude}`);
  };

  const handleError: PositionErrorCallback = useCallback(
    (err) => {
      setUserLocation(null);
      onError?.(err);
    },
    [onError]
  );

  useEffect(() => {
    if (auth) {
      navigator.geolocation.getCurrentPosition(onSuccess, handleError);
    }
  }, [auth, handleError]);

  return userLocation;
};
