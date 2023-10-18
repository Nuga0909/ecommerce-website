import express from "express";
const app = express();
import multer from "multer";
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

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '../config/.env');
dotenv.config({ path: envPath });

const URI = process.env.MONGODB_URI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(error => {
    console.error("MongoDB connection error:", error);
});

// use multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
}));

app.use(logger('dev'));

app.use("/products", productRouter);

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
