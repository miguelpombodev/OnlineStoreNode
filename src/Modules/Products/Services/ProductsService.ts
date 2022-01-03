import { IProductsRepository } from '../Repositories/IProductsRepository';

class ProductsService {
  constructor(private readonly _repository: IProductsRepository) {}

  async listAll() {
    const productsList = await this._repository.listAll();

    return productsList;
  }
}

export default ProductsService;
