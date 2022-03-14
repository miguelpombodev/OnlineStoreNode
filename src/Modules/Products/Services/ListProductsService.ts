import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../Repositories/IProductsRepository';
import { IProductTypesRepository } from '../Repositories/IProductTypesRepository';

@injectable()
class ListProductsService {
  constructor(
    @inject('ProductsRepository')
    private readonly _repository: IProductsRepository,

    @inject('ProductTypesRepository')
    private readonly _productTypeRepository: IProductTypesRepository
  ) {}

  async listByCategory(category: string) {
    const productCategory = await this._productTypeRepository.findByName(
      category
    );

    const productsList = await this._repository.listByCategory(
      productCategory.Id
    );

    return productsList;
  }

  async listOne(id: string) {
    const productsList = await this._repository.findById(id);

    return productsList;
  }
}

export default ListProductsService;
