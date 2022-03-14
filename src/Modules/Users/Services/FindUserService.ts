import AppError from '@AppError';
import { inject, injectable } from 'tsyringe';
import { ICustomersRepository } from '../Repositories/ICustomersRepositories';

@injectable()
class FindUserService {
  constructor(
    @inject('CustomersRepository')
    private readonly _repository: ICustomersRepository
  ) {}
  async execute(id: string) {
    const userFound = await this._repository.findById(id);

    if (!userFound) {
      throw new AppError('User not found');
    }

    delete userFound.Password;

    return userFound;
  }
}

export default FindUserService;
