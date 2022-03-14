import AppError from '@AppError';
import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../Repositories/IProductsRepository';
import { IProductTypesRepository } from '../Repositories/IProductTypesRepository';

interface IRequest {
  Id?: string;
  Name: string;
  TypeId: number;
  Sku: string;
  Value: number;
  StockAmount?: number;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private readonly _repository: IProductsRepository
  ) {}

  async execute({ Name, TypeId, Sku, Value, StockAmount }: IRequest) {
    const alreadyHasProduct = await this._repository.findByName(Name);

    if (alreadyHasProduct) {
      throw new AppError('Product already registered');
    }

    const productCreated = await this._repository.create({
      Name,
      TypeId,
      Sku,
      Value,
      StockAmount,
    });

    return productCreated;
  }
}

export default CreateProductService;
