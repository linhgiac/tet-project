require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Connect to MongoDB
mongoose.set('strictQuery', false);
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, err => {
    if (err) throw err;
    console.log('Connected to mongodb');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
