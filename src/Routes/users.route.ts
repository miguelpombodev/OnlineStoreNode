import { Router } from 'express';
import ensureAuthenticatedUser from '@Middlewares/ensureAuthenticatedUser';
import CustomersController from '@Modules/Users/Controllers/CustomersController';

const usersRoute = Router();

const customersControllers = new CustomersController();

usersRoute.post('/', customersControllers.create);
usersRoute.get('/', customersControllers.loginUser);

usersRoute.use(ensureAuthenticatedUser);
usersRoute.get('/:id', customersControllers.findUser);

export default usersRoute;
