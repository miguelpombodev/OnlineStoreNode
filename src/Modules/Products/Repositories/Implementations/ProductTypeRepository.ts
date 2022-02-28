import ProductType from '@Modules/Products/Entities/ProductType';
import { getRepository, Repository } from 'typeorm';
import { ICreateProductTypeDTO } from '../DTOs/ICreateProductTypeDTO';
import { IProductTypesRepository } from '../IProductTypesRepository';

class ProductTypesRepositoryImplementation implements IProductTypesRepository {
  private repository: Repository<ProductType>;

  constructor() {
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

  async findByName(name: string): Promise<ProductType> {
    const category = await this.repository.findOne({
      where: {
        Name: name,
      },
    });

    return category;
  }
}

export default ProductTypesRepositoryImplementation;
