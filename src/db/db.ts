import mongoose from "mongoose";

mongoose.set('strictQuery', false);

const connectDB: (MONGO_URI: string) => Promise<void> = async (MONGO_URI: string): Promise<void> => {
    await mongoose.connect(MONGO_URI);
}

export default connectDB;
