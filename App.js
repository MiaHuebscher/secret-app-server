import "dotenv/config";
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import UserRoutes from './Users/routes.js';
import DataRoutes from "./Data/routes.js";
import RestaurantRoutes from "./Restaurants/routes.js";
import session from "express-session";

// Connect to the Mongo database
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/angelas-food-database';
mongoose.connect(CONNECTION_STRING);

// Create and configure the server
const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000"})
);
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "AngelaIsDope",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
app.get('/', (req, res) => {res.send("Welcome to the Server for Angela's Food Adventures App!! \
    Also...You Shouldn't Be Here, Please Leave.")});
UserRoutes(app);
DataRoutes(app);
RestaurantRoutes(app);
app.listen(process.env.PORT || 4000);