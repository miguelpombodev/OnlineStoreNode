import Customers from '../Entities/Customer';
import { ICreateUserDTO } from './DTOs/ICreateUserDTO';

export interface ICustomersRepository {
  create({
    Name,
    Surname,
    Email,
    Password,
    CPF,
  }: ICreateUserDTO): Promise<Customers>;
  findById(id: string): Promise<Customers>;
  findByEmail(name: string): Promise<Customers>;
}
