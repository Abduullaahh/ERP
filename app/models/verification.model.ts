import mongoose, { Schema, Document } from 'mongoose';

export interface IVerification extends Document {
  token: string;
  userId: mongoose.Types.ObjectId;
  type: 'email' | 'password';
  expires: Date;
}

const VerificationSchema = new Schema<IVerification>({
  token: { type: String, required: true, unique: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['email', 'password'], required: true },
  expires: { type: Date, required: true },
}, { timestamps: true });

export const Verification = mongoose.models.Verification || 
  mongoose.model<IVerification>('Verification', VerificationSchema);
