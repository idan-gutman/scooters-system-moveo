import mongoose, { Schema, Document } from 'mongoose';

export interface IScooter extends Document {
  uniqueId: string;
  currentLocation: {
    lat: number;
    long: number;
  };
  model: string;
  yearOfManufacture: number;
  status: 'active'| 'broken'| 'handled'| 'charged';
}

const ScooterSchema = new Schema({
  uniqueId: { type: String, required: true, unique: true },
  currentLocation: {
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
  },
  model: { type: String, required: true },
  yearOfManufacture: { type: Number, required: true },
  status: { type: String, required: true },
});

export default mongoose.model<IScooter>('Scooter', ScooterSchema);


