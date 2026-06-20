import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
console.log('MONGO value:', process.env.MONGO);
mongoose.connect(process.env.MONGO)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.log('Error:', err.message));