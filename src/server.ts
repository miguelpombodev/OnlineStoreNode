import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import productsRoute from './Routes/products.route';
import usersRoute from './Routes/users.route';
import './Database';
import './Shared/Container';
import AppError from './Errors/AppError';

const app = express();
const PORT = 3333;

app.use(express.json());
app.use('/products', productsRoute);
app.use('/users', usersRoute);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      message: `Internal Server Error - ${err.message}`,
    });
  }
);

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});
