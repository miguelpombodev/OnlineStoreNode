import { inject, injectable } from 'tsyringe';
import Product from '../Entities/Product';

import { IProductsRepository } from '../Repositories/IProductsRepository';

interface IRequest {
  Id?: string;
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

  async update(productInfoUpdate: Product) {
    const productExist = await this._repository.findById(productInfoUpdate.Id);

    if (!productExist) {
      return null;
    }

    const updatedProduct = await this._repository.update(productInfoUpdate);
    return updatedProduct;
  }

  async delete(id: string) {
    const productExist = await this._repository.findById(id);

    if (!productExist) {
      return null;
    }

    const updatedProduct = await this._repository.delete(id);
    return updatedProduct;
  }
}

export default ProductsService;
