import "dotenv/config";
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import UserRoutes from "./Users/routes";

// Connect to the Mongo database
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/angelas-food-database';
mongoose.connect(CONNECTION_STRING);

// Create and configure the server
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {res.send("Welcome to the Server for Angela's Food Adventures App!! \
    Also...You Shouldn't Be Here, Please Leave.")});
UserRoutes(app);
app.listen(process.env.PORT || 4000);