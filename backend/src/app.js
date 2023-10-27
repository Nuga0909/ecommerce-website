import express from "express";
const app = express();
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import createHttpError from "http-errors";
import logger from "morgan";
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import productRouter from "./routes/product.routes.js";
import userRouter from "./routes/user.routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '../config/.env');
dotenv.config({ path: envPath });

const URI = process.env.MONGODB_URI;
console.log(URI);

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(error => {
    console.error("MongoDB connection error:", error);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
}));

app.use(logger('dev'));

// Serve the static files from the "uploads" directory
// app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
console.log("Directory path:", path.join(__dirname, "../uploads"));

app.use("/products", productRouter);
app.use("/users", userRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Error handling middleware (after all other app.use() and routes)
app.use((req, res, next) => {
    next(createHttpError(404));
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {}
    });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
