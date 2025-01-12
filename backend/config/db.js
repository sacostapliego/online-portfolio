import mongoose from 'mongoose';
import AWS from 'aws-sdk';

// Create an SSM or Secrets Manager client
const ssm = new AWS.SSM();

const getSecretValue = async (secretName) => {
  try {
    const data = await ssm.getParameter({
      Name: secretName,
      WithDecryption: true,  // Decrypt the secret value
    }).promise();

    return data.Parameter.Value;
  } catch (err) {
    console.error("Error fetching secret:", err);
    throw err;
  }
};

export const connectDB = async () => {
  try {
    // Fetch the Mongo URI from AWS SSM
    const mongoUri = await getSecretValue('/amplify/d2wr6azxcouomt/main/MONGO_URI');
    
    // Connect to MongoDB using the URI
    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);  // Exit with failure code
  }
};
