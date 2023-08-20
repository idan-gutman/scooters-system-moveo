import mongoose, { Schema, Document } from 'mongoose';

interface Failure extends Document {
  scooterId: string;
  type: 'routine care' | 'brake replacement' | 'wheel replacement';
  status: 'open' | 'care' | 'closed';
  openingTime: Date;
  closingTime?: Date | undefined;
}

const FailureSchema: Schema = new Schema({
  scooterId: { type: Schema.Types.String, ref: 'Scooter' },
  type: { type: String, required: true },
  status: { type: String, required: true },
  openingTime: { type: Date, required: true },
  closingTime: { type: Date, required: false },
});

export default mongoose.model<Failure>('Failure', FailureSchema);
