import User from '../Models/User';
import { ICreateUserDTO } from './DTOs/ICreateUserDTO';

export interface IUsersRepositories {
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
  }: ICreateUserDTO): void;
  findById(id: string): User;
}
