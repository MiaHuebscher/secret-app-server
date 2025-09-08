import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {res.send("Welcome to the Server for Angela's Food Adventures App!! \
    Also...You Shouldn't Be Here, Please Leave")})
app.listen(process.env.PORT || 4000);