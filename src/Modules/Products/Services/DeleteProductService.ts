import AppError from '@AppError';
import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../Repositories/IProductsRepository';

@injectable()
class DeleteProductService {
  constructor(
    @inject('ProductsRepository')
    private readonly _repository: IProductsRepository
  ) {}

  async execute(id: string) {
    const productExist = await this._repository.findById(id);

    if (!productExist) {
      throw new AppError('Product not found');
    }

    const updatedProduct = await this._repository.delete(id);
    return updatedProduct;
  }
}

export default DeleteProductService;
