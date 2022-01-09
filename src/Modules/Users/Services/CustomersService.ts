import { inject, injectable } from 'tsyringe';
import { ICustomersRepository } from '../Repositories/ICustomersRepositories';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

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
}

@injectable()
class CustomersService {
  constructor(
    @inject('CustomersRepository')
    private readonly _repository: ICustomersRepository
  ) {}

  async create({ Name, Surname, CPF, Email, Password }: IRequest) {
    const isAlreadyUser = await this._repository.findByEmail(Email);

    if (isAlreadyUser) {
      return null;
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
      return null;
    }

    delete userFound.Password;

    return userFound;
  }

  async loginUser({ Email, Password }: IRequest): Promise<IResponse> {
    const isAlreadyUser = await this._repository.findByEmail(Email);

    if (!isAlreadyUser) {
      return null;
    }

    if (!compare(isAlreadyUser.Password, Password)) {
      return null;
    }

    const token = sign(
      {},
      '815a7374c650d6715af06a8722fdcfce576714091874d5934efb3c544b527ed7',
      {
        subject: isAlreadyUser.Id,
        expiresIn: '1d',
      }
    );

    const loggedUser: IResponse = {
      user: {
        Name: isAlreadyUser.Name,
        Email: isAlreadyUser.Email,
      },
      token,
    };

    return loggedUser;
  }
}

export default CustomersService;
