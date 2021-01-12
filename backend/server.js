const express = require('express');
require('dotenv').config();
const path = require('path');
const connectDB = require('./config/db');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');
const uploadRoutes = require('./routes/upload');
const morgan = require('morgan');
const cors = require('cors');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const app = express();
connectDB();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});
const dirname = path.resolve();
app.use('/uploads', express.static(path.join(dirname, '/uploads')));
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server runnning in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
