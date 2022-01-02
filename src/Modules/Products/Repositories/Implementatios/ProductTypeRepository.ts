import ProductType from '../../Models/ProductType';
import { ICreateProductTypeDTO } from '../DTOs/ICreateProductTypeDTO';
import { IProductTypesRepository } from '../IProductTypesRepository';

class ProductsRepositoryImplementation implements IProductTypesRepository {
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

export default ProductsRepositoryImplementation;
