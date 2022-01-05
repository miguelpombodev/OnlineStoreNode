import { inject, injectable } from 'tsyringe';
import { IUsersRepositories } from '../Repositories/IUsersRepositories';

@injectable()
class UsersService {
  constructor(
    @inject('UsersRespository')
    private readonly _repository: IUsersRepositories
  ) {}

  async create() {
    // const user = await this._repository.create();
  }
}

export default UsersService;
