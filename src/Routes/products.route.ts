import { Router } from 'express';
import ProductsController from '../Modules/Products/Controllers/ProductsController';

const productsRoute = Router();

const productsController = new ProductsController();

productsRoute.get('/', productsController.listAll);
productsRoute.post('/', productsController.create);
productsRoute.put('/:id', productsController.update);

export default productsRoute;
