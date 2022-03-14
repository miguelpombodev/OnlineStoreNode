import AppError from '@AppError';
import { inject, injectable } from 'tsyringe';
import Product from '../Entities/Product';
import { IProductsRepository } from '../Repositories/IProductsRepository';

@injectable()
class UpdateProductService {
  constructor(
    @inject('ProductsRepository')
    private readonly _repository: IProductsRepository
  ) {}

  async update(productInfoUpdate: Product) {
    const productExist = await this._repository.findById(productInfoUpdate.Id);

    if (!productExist) {
      throw new AppError('Product not found');
    }

    const updatedProduct = await this._repository.update(productInfoUpdate);
    return updatedProduct;
  }
}

export default UpdateProductService;
