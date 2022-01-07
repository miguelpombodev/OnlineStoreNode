import { inject, injectable } from 'tsyringe';

import { IProductsRepository } from '../Repositories/IProductsRepository';

interface IRequest {
  Name: string;
  TypeId: number;
  Sku: string;
  Value: number;
  StockAmount?: number;
  ProductUrl: string;
}

@injectable()
class ProductsService {
  constructor(
    @inject('ProductsRepository')
    private readonly _repository: IProductsRepository
  ) {}
  async create({
    Name,
    TypeId,
    Sku,
    Value,
    StockAmount,
    ProductUrl,
  }: IRequest) {
    const alreadyHasProduct = await this._repository.findByName(Name);

    if (alreadyHasProduct) {
      return null;
    }

    const productCreated = await this._repository.create({
      Name,
      TypeId,
      Sku,
      Value,
      StockAmount,
      ProductUrl,
    });

    return productCreated;
  }

  async listAll() {
    const productsList = await this._repository.listAll();

    return productsList;
  }

  async update(id: string) {
    const productExist = await this._repository.findById(id);

    if (!productExist) {
      return null;
    }

    this._repository.update(id);
  }
}

export default ProductsService;
