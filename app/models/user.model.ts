import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name?: string;
  email: string;
  password?: string;
  emailVerified?: Date;
  role: 'USER' | 'MANAGER' | 'ADMIN';
  image?: string;
}

const UserSchema = new Schema<IUser>({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  emailVerified: Date,
  role: { type: String, enum: ['USER', 'MANAGER', 'ADMIN'], default: 'USER' },
  image: String,
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
