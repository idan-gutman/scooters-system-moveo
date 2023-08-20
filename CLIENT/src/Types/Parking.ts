export interface Parking {
  _id?: string;
  address: string;
  numberOfScooters: number;
  location: {
    lat: number;
    long: number;
  };
}
