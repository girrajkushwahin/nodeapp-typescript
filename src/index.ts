import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from 'url';
import path from "path";
import { errorHandler } from "./middlewares/errorHandler.js";
import connectDB from "./db/db.js";


// *****************************

import router1 from "./routes/route.js";

// *****************************


const app: Application = express();

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);
const publicPath: string = path.join(__dirname, '..', 'public');


dotenv.config();
try {
    if (!process.env.PORT || !process.env.MONGODB_URL) {
        throw new Error("set environment variables properly");
    }
} catch (err) {
    if (err instanceof Error) console.error("message:", err.message);
    else console.error("unknown error: ", err);
    // cleanup() // do cleanup before exit(if needed) like closing DB connections, releasing resources etc.
    process.exit(1);
}
const PORT: string = process.env.PORT;
connectDB(process.env.MONGODB_URL);


app.use(cors());
// app.use((req: Request, res: Response, next: NextFunction) => {
//     if (req.method === "OPTIONS") {
//         res.header({
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Headers":
//                 "Origin, X-Requested-With, Content-Type, Accept, Authorization",
//             "Access-Control-Allow-Methods": "PUT, POST, PATCH, DELETE, GET"
//         });
//         return res.status(200).end();
//     }
//     next();
// });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(publicPath));


// *****************************

app.use('/api', router1);

// *****************************


// Global error handling middleware (can integrate third-party error reporting and monitoring services) -
app.use(errorHandler);

app.get("/", (req: Request, res: Response): void => {
    res.json({ status: "success", message: "Node.js-TypeScript application" });
});

app.listen(PORT, (): void => {
    console.log(`Server running on PORT ${PORT}`);
});