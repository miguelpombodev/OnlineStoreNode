import { inject, injectable } from 'tsyringe';
import { ICartsRepository } from '../Repositories/ICartsRepositories';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import AppError from '../../../Errors/AppError';

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
class CartService {
  constructor(
    @inject('CartsRepository')
    private readonly _repository: ICartsRepository
  ) {}
}

export default CartService;
