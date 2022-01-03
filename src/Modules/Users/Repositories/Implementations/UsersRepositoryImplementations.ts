import { getRepository, Repository } from 'typeorm';
import User from '../../Models/User';
import { ICreateUserDTO } from '../DTOs/ICreateUserDTO';
import { IUsersRepositories } from '../IUsersRepositories';

class UsersRepositoryImplementations implements IUsersRepositories {
  private repository: Repository<User>;

  private constructor() {
    this.repository = getRepository(User);
  }
  create({
    Name,
    Surname,
    Email,
    Password,
    CPF,
    Cellphone,
    Address,
    Neighborhood,
    City,
    UF,
  }: ICreateUserDTO): void {
    throw new Error('Method not implemented.');
  }
  findById(id: string): User {
    throw new Error('Method not implemented.');
  }
}

export default UsersRepositoryImplementations;
