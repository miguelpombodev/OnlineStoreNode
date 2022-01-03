import { Router } from 'express';
import { productsController } from '../Modules/Products/Controllers';

const productsRoute = Router();

productsRoute.get('/', (request, response) => {
  productsController.listAll(request, response);
});

export default productsRoute;
