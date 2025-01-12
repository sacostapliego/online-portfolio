import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoUri = secret.MONGO_URI; // Use the secret fetched above
    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
