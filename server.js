const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const app = express();
testRoutes = require('./routes/testRoutes');

const morgan = require('morgan');

dotenv.config();
const port = process.env.PORT || 8080;

//database connection
const connectDB = require('./config/db');
connectDB();  

//middleware to handle CORS issues
const cors = require('cors');
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());
app.use(morgan('dev'));
// Sample route
app.use('/api/v1', testRoutes);
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/user', require('./routes/userRoutes'));
app.get('/', (req, res) => {
  res.send('Hello World...!');
});

//listen on the specified port  

app.listen(port, () => {
  console.log(`Node Server is running at http://localhost:${port}`.white.bgMagenta);
}); 

