export interface CurrentLocationData {
  country?: string;
  cityName?: string;
  cityKey?: string;
  EpochTime: number;
  HasPrecipitation: boolean;
  IsDayTime: boolean;
  Link: string;
  LocalObservationDateTime: string;
  MobileLink: string;
  PrecipitationType: null;
  Temperature: {
    Imperial: { Unit: string; UnitType: number; Value: number };
    Metric: { Unit: string; UnitType: number; Value: number };
  };
  WeatherIcon: number;
  WeatherText: string;
}

export interface ILocation {
  Key: string;
  LocalizedName: string;
  Country: {
    LocalizedName: string;
  };
}

export interface IFavorites {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      key: number;
      title: string;
    }
  ];
}

export interface IHourlyForecast {
  WeatherIcon: number;
  DateTime: string
  EpochDateTime: number
  IconPhrase: string
  IsDaylight: boolean
  Temperature: { Value: number; }
  Wind: {
    Speed: {
      Unit: string
      UnitType: number
      Value: number
    },
  }
}

export interface ICoordsMap {
  GeoPosition: {
    Latitude: number;
    Longitude: number;
  }
}