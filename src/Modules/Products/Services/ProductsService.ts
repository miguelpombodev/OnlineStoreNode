import AppError from '@AppError';
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
}

@injectable()
class ProductsService {
  constructor(
    @inject('ProductsRepository')
    private readonly _repository: IProductsRepository
  ) {}
  async create({ Name, TypeId, Sku, Value, StockAmount }: IRequest) {
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

  async listAll() {
    const productsList = await this._repository.listAll();

    return productsList;
  }

  async listOne(id: string) {
    const productsList = await this._repository.findById(id);

    return productsList;
  }

  async update(productInfoUpdate: Product) {
    const productExist = await this._repository.findById(productInfoUpdate.Id);

    if (!productExist) {
      throw new AppError('Product not found');
    }

    const updatedProduct = await this._repository.update(productInfoUpdate);
    return updatedProduct;
  }

  async delete(id: string) {
    const productExist = await this._repository.findById(id);

    if (!productExist) {
      throw new AppError('Product not found');
    }

    const updatedProduct = await this._repository.delete(id);
    return updatedProduct;
  }
}

export default ProductsService;
