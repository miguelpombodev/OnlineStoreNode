import { inject, injectable } from 'tsyringe';
import { ICustomersRepository } from '../Repositories/ICustomersRepositories';
import { compare } from 'bcrypt';

interface IRequest {
  Name: string;
  Surname: string;
  CPF: string;
  Email: string;
  Password: string;
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

  async loginUser({ Email, Password }: IRequest) {
    const isAlreadyUser = await this._repository.findByEmail(Email);

    if (!isAlreadyUser) {
      return null;
    }

    if (!compare(isAlreadyUser.Password, Password)) {
      return null;
    }

    return isAlreadyUser;
  }
}

export default CustomersService;
