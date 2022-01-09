import { Router } from 'express';
import CustomersController from '../Modules/Users/Controllers/CustomersController';

const usersRoute = Router();

const customersControllers = new CustomersController();

usersRoute.post('/', customersControllers.create);
usersRoute.get('/:id', customersControllers.findUser);
usersRoute.get('/', customersControllers.loginUser);

export default usersRoute;
