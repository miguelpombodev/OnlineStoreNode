import { getRepository, Repository } from 'typeorm';
import ProductType from '../../Models/ProductType';
import { ICreateProductTypeDTO } from '../DTOs/ICreateProductTypeDTO';
import { IProductTypesRepository } from '../IProductTypesRepository';

class ProductTypesRepositoryImplementation implements IProductTypesRepository {
  private repository: Repository<ProductType>;

  private constructor() {
    this.repository = getRepository(ProductType);
  }

  create({ Name, Description }: ICreateProductTypeDTO): void {
    throw new Error('Method not implemented.');
  }
  listAll(): ProductType[] {
    throw new Error('Method not implemented.');
  }
  findById(id: string): ProductType {
    throw new Error('Method not implemented.');
  }
  findByName(name: string): ProductType {
    throw new Error('Method not implemented.');
  }
}

export default ProductTypesRepositoryImplementation;
