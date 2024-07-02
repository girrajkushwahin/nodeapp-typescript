import mongoose from "mongoose";

mongoose.set('strictQuery', false);

const connectDB: (MONGODB_URL: string) => Promise<void> = async (MONGODB_URL: string): Promise<void> => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("database connected...");
    } catch (error) {
        console.log("error connecting database...");
        console.error(error);
    }
}

export default connectDB;
