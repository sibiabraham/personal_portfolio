import mongoose, { Model } from 'mongoose';
import { connectToDatabase } from './mongodb';

export async function getModel<T>(tableName: string): Promise<Model<T>> {
  await connectToDatabase();

  if (mongoose.models[tableName]) {
    return mongoose.models[tableName] as Model<T>;
  }

  const schema = new mongoose.Schema({}, { strict: false });
  return mongoose.model<T>(tableName, schema);
}
