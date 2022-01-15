import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import 'express-async-errors';
import './Database';
import './Shared/Container';
import AppError from './Errors/AppError';
import cors from 'cors';
import router from './Routes';

const app = express();
const PORT = 3333;

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(cors());

app.use(router);

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
