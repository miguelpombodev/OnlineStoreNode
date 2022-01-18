import { inject, injectable } from 'tsyringe';
import { ICustomersRepository } from '../Repositories/ICustomersRepositories';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import AppError from '../../../Errors/AppError';
import { ICartsRepository } from '../../Cart/Repositories/ICartsRepositories';

interface IRequest {
  Name: string;
  Surname: string;
  CPF: string;
  Email: string;
  Password: string;
}

interface IResponse {
  user: {
    Name: string;
    Email: string;
  };
  token: string;
  cartId: string;
}

@injectable()
class CustomersService {
  constructor(
    @inject('CustomersRepository')
    private readonly _repository: ICustomersRepository,
    @inject('CartsRepository')
    private readonly _cartRepository: ICartsRepository
  ) {}

  async create({ Name, Surname, CPF, Email, Password }: IRequest) {
    const isAlreadyUser = await this._repository.findByEmail(Email);

    if (isAlreadyUser) {
      throw new AppError('Email/Password are incorrectly');
    }

    const user = await this._repository.create({
      Name,
      Surname,
      CPF,
      Email,
      Password,
    });

    return user;
  }

  async findUser(id: string) {
    const userFound = await this._repository.findById(id);

    if (!userFound) {
      throw new AppError('User not found');
    }

    delete userFound.Password;

    return userFound;
  }

  async loginUser({ Email, Password }: IRequest): Promise<IResponse> {
    const isAlreadyUser = await this._repository.findByEmail(Email);

    if (!isAlreadyUser) {
      throw new AppError('Email/Password are incorrectly');
    }

    if (!compare(isAlreadyUser.Password, Password)) {
      throw new AppError('Email/Password are incorrectly');
    }

    const token = sign(
      {},
      '815a7374c650d6715af06a8722fdcfce576714091874d5934efb3c544b527ed7',
      {
        subject: isAlreadyUser.Id,
        expiresIn: '1d',
      }
    );

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

export default CustomersService;
