import express from "express";
import authRoutes from './routes/auth.routes.js';
import dotenv from 'dotenv'
import connectMongoDB from './db/connectMongoDB.js'
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
    connectMongoDB();
})