import { Router } from 'express';

const usersRoute = Router();

usersRoute.get('/', (request, response) => {
  return response.json({
    message: 'users working',
  });
});

export default usersRoute;
