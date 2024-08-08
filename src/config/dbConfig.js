import mongoose from 'mongoose';
const mongoUrl = 'mongodb://127.0.0.1:27017/online_ntdl';

export const connectMongodb = async () => {
  try {
    const conn = await mongoose.connect(mongoUrl);
    conn && console.log('DB connected');
  } catch (error) {
    console.log(error);
  }
};
