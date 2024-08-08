// Import the express package
import express from 'express';
// Import the dotenv to access the .env file
import dotenv from 'dotenv';
// Import the cookie parser to parse the cookies recieved in the request/response headers
import cookieParser from 'cookie-parser';


// Import all the custom files
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import router from './routes/userRoutes.js';

// Mount the config to fetch the environment variables for all the custom files.
dotenv.config();

const port = process.env.PORT || 3300;

// Connect to the Mongo DB using the connectio string.
connectDB();

// Initialize the express
const app = express();

// To parse the urlencoded or req.body payload into a actual readable JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.get('/', (req, res) => res.send('API running'));
app.use("/api/users", router);

// Middleware for async route controller handling
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));