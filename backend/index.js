import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';


import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDBURI;

async function connectDB() {
    try {
        await mongoose.connect(URI);
        console.log('MongoDB connection successful');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        throw err;
    }
}
connectDB();

app.use("/book", bookRoute);
app.use("/user", userRoute);


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});