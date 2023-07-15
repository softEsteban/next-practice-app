import { log } from 'console';
import mongoose from 'mongoose';

const connectMongo = async () => {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
        return Promise.reject(new Error("Mongo URI is not defined."));
    }

    try {
        const { connection } = await mongoose.connect(mongoURI);

        if (connection.readyState === 1) {
            log("Database connected");
        }
    } catch (error) {
        return Promise.reject(error);
    }
};

export default connectMongo;