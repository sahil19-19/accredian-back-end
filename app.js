import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import route from "./routes/router.js"
dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}));

app.use(express.json());

const PORT = process.env.PORT | 5000;

app.use('/api', route);

app.listen(PORT , ()=> {
    console.log(`Server is live on http://localhost:${PORT}`);
})
