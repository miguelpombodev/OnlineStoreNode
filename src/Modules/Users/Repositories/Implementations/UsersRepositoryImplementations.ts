import { getRepository, Repository } from 'typeorm';
import Customers from '../../Entities/Customer';
import { ICreateUserDTO } from '../DTOs/ICreateUserDTO';
import { IUsersRepositories } from '../IUsersRepositories';

class UsersRepositoryImplementations implements IUsersRepositories {
  private repository: Repository<Customers>;

  private constructor() {
    this.repository = getRepository(Customers);
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
  findById(id: string): Customers {
    throw new Error('Method not implemented.');
  }
}

export default UsersRepositoryImplementations;
