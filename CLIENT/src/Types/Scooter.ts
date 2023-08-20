export interface Scooter {
  uniqueId: string;
  currentLocation: {
    lat: number;
    long: number;
  };
  model: string;
  yearOfManufacture: number;
  status: 'active' | 'broken' | 'handled' | 'charged';
}

export interface Failure {
  scooterId: string;
  type: 'routine care' | 'brake replacement' | 'wheel replacement';
  status: 'open' | 'care' | 'closed';
  openingTime: Date;
  closingTime?: Date | undefined;
}
