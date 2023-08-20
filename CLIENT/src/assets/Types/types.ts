import { Dispatch, SetStateAction } from 'react';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface UserResponse {
  token: string;
  user: {
    api_key: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string;
  };
}

export interface ILogOut {
  isMobile?: boolean;
  isLogOutOpen?: boolean;
  setLogOutOpen: Dispatch<SetStateAction<boolean>>;
}
export interface ISwitchMode {
  $isHeader?: boolean;
}
export interface IsActiveProps {
  isActive?: boolean;
}
export interface Position {
  coords: {
    accuracy: number;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    latitude: number;
    longitude: number;
    speed: number | null;
  };
  timestamp: number;
}
export interface DayForecast {
  Date: string;
  Day: { HasPrecipitation: false; Icon: number; IconPhrase: string };
  EpochDate: number;
  Link: string;
  MobileLink: string;
  Night: { HasPrecipitation: false; Icon: number; IconPhrase: string };
  Sources: [string];
  Temperature: {
    Maximum: { Unit: string; UnitType: number; Value: number };

    Minimum: { Unit: string; UnitType: number; Value: number };
  };
}

export interface IsFavoritesSearch {
  $isFavorites?: boolean
  isEmptyData?: boolean
}
