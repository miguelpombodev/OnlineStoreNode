import { Router } from 'express';

const productsRoute = Router();

productsRoute.get('/', (request, response) => {
  return response.json({
    message: 'products working',
  });
});

export default productsRoute;
