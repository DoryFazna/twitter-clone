import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

import connectMongoDB from './db/connectMongoDB.js'

dotenv.config();
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
    connectMongoDB();
})