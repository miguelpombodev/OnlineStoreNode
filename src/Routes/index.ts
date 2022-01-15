import express, { Router } from 'express';
import productsRoute from './products.route';
import usersRoute from './users.route';

const router = Router();

router.use('/products', productsRoute);
router.use('/users', usersRoute);

export default router;
