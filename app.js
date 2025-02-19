//
import express from "express";
import  {PrismaClient} from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();
import route from "./routes/router.js"

const app = express();
app.use(express.json());

const PORT = process.env.PORT | 5000;

// const prisma = new PrismaClient();

app.use('/api', route);

app.listen(PORT , ()=> {
    console.log(`Server is live on http://localhost:${PORT}`);
})
