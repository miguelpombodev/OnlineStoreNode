import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UsersService from '../Services/CustomersService';

class CustomersController {
  async create(request: Request, response: Response): Promise<Response> {
    const usersService = container.resolve(UsersService);

    const body = request.body;

    const creationResult = await usersService.create(body);

    if (creationResult === null) {
      return response.status(404).json({
        error: 'User or password are incorrect',
      });
    }

    return response.json(creationResult);
  }

  async findUser(request: Request, response: Response) {
    const usersService = container.resolve(UsersService);

    const { id } = request.params;

    const userInfos = await usersService.findUser(id);

    if (userInfos === null) {
      return response.status(404).json({
        error: 'User or password are incorrect',
      });
    }

    return response.json(userInfos);
  }

  async loginUser(request: Request, response: Response) {
    const usersService = container.resolve(UsersService);

    const body = request.body;

    const loginResult = await usersService.loginUser(body);

    if (loginResult === null) {
      return response.status(404).json({
        message: 'Email/Password are incorrectly',
      });
    }

    return response.json(loginResult);
  }
}

export default CustomersController;
