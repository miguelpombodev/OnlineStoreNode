import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../Services/CreateUserService';
import FindUserService from '../Services/FindUserService';
import LoginUserService from '../Services/LoginUserService';

class CustomersController {
  async create(request: Request, response: Response): Promise<Response> {
    const usersService = container.resolve(CreateUserService);

    const body = request.body;

    const creationResult = await usersService.execute(body);

    if (creationResult === null) {
      return response.status(404).json({
        error: 'User or password are incorrect',
      });
    }

    return response.json(creationResult);
  }

  async findUser(request: Request, response: Response) {
    const usersService = container.resolve(FindUserService);

    const { id } = request.params;

    const userInfos = await usersService.execute(id);

    return response.json(userInfos);
  }

  async loginUser(request: Request, response: Response) {
    const usersService = container.resolve(LoginUserService);

    const body = request.body;

    const loginResult = await usersService.execute(body);

    return response.json(loginResult);
  }
}

export default CustomersController;
