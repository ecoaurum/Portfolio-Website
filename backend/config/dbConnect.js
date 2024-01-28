import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT)
            .then(() => console.log('Connect to DB is OK'))
            .catch((err) => console.log('Error connect to DB', err))
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};
export default connectDB;
