const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');
const cors = require('cors');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server runnning in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
