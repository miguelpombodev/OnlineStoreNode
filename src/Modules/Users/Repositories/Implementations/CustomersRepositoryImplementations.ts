import { getRepository, Repository } from 'typeorm';
import Customers from '../../Entities/Customer';
import { ICreateUserDTO } from '../DTOs/ICreateUserDTO';
import { ICustomersRepository } from '../ICustomersRepositories';
import { v4 as uuid } from 'uuid';
import { hash } from 'bcrypt';

class CustomersRepositoryImplementations implements ICustomersRepository {
  private repository: Repository<Customers>;

  constructor() {
    this.repository = getRepository(Customers);
  }
  async create({
    Name,
    Surname,
    Email,
    Password,
    CPF,
  }: ICreateUserDTO): Promise<Customers> {
    const Id = uuid();
    const hashedPassword = await hash(Password, 8);

    try {
      const user = this.repository.create({
        Id,
        Name,
        Surname,
        Email,
        Password: hashedPassword,
        CPF,
      });

      await this.repository.save(user);
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
  async findById(id: string): Promise<Customers> {
    const user = await this.repository.findOne(id);

    return user;
  }
  async findByEmail(email: string): Promise<Customers> {
    const user = await this.repository.findOne({
      where: {
        Email: email,
      },
    });

    return user;
  }
}

export default CustomersRepositoryImplementations;
