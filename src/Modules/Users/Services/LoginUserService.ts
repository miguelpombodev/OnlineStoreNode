import AppError from '@AppError';
import { ICartsRepository } from '@Modules/Cart/Repositories/ICartsRepositories';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import { ICustomersRepository } from '../Repositories/ICustomersRepositories';
import { IRequest } from './interfaces/IRequest';
import { IResponse } from './interfaces/IResponse';

@injectable()
class LoginUserService {
  constructor(
    @inject('CustomersRepository')
    private readonly _repository: ICustomersRepository,
    @inject('CartsRepository')
    private readonly _cartRepository: ICartsRepository
  ) {}

  async execute({ Email, Password }: IRequest): Promise<IResponse> {
    const isAlreadyUser = await this._repository.findByEmail(Email);

    if (!isAlreadyUser) {
      throw new AppError('Email/Password are incorrectly');
    }

    if (!compare(isAlreadyUser.Password, Password)) {
      throw new AppError('Email/Password are incorrectly');
    }

    const token = sign({}, process.env.JWT_SECRET, {
      subject: isAlreadyUser.Id,
      expiresIn: '1d',
    });

    const userCart = await this._cartRepository.create(isAlreadyUser.Id, 0);

    const loggedUser: IResponse = {
      user: {
        Name: isAlreadyUser.Name,
        Email: isAlreadyUser.Email,
      },
      token,
      cartId: userCart,
    };

    return loggedUser;
  }
}

export default LoginUserService;
