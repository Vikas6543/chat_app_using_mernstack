const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./db_connection');
const cors = require('cors');

// dotenv
dotenv.config();

// database initialization
connectDB();

// cors
app.use(cors());

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/users', require('./routes/userRoute'));
app.use('/chat', require('./routes/chatRoute'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
