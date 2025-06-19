import dotenv from "dotenv";
import express from "express";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json()); // to be able to get req data from frontend

app.use("/api/auth", authRoutes)

app.listen(port,  () => {
    console.log(`Server is running on port: ${port}`);
    connectDB()
})