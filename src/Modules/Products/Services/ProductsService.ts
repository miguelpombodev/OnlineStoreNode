import { inject, injectable } from 'tsyringe';

import { IProductsRepository } from '../Repositories/IProductsRepository';

@injectable()
class ProductsService {
  constructor(
    @inject('ProductsRepository')
    private readonly _repository: IProductsRepository
  ) {}

  async listAll() {
    const productsList = await this._repository.listAll();

    return productsList;
  }
}

export default ProductsService;
