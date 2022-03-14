import AppError from '@AppError';
import { inject, injectable } from 'tsyringe';
import { ICustomersRepository } from '../Repositories/ICustomersRepositories';
import { IRequest } from './interfaces/IRequest';

@injectable()
class CreateUserService {
  constructor(
    @inject('CustomersRepository')
    private readonly _repository: ICustomersRepository
  ) {}

  async execute({ Name, Surname, CPF, Email, Password }: IRequest) {
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
}

export default CreateUserService;
