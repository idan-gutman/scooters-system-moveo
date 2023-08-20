import mongoose, { Schema, Document } from 'mongoose';

interface Parking extends Document {
  address: string;
  numberOfScooters: number;
  location: {
    lat: number;
    long: number;
  };
}

const ParkingSchema: Schema = new Schema({
  address: { type: String, required: true },
  numberOfScooters: { type: Number, required: true },
  location: {
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
  },
});

export default mongoose.model<Parking>('Parking', ParkingSchema);
