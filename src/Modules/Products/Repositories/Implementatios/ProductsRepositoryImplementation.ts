import Products from '../../Models/Product';
import { ICreateProductDTO } from '../DTOs/ICreateProductDTO';
import { IProductsRepository } from '../IProductsRepository';

class ProductsRepositoryImplementation implements IProductsRepository {
  create({
    Name,
    Sku,
    TypeId,
    Value,
    StockAmount,
    ProductUrl,
  }: ICreateProductDTO): void {
    throw new Error('Method not implemented.');
  }
  listAll(): Products[] {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Products {
    throw new Error('Method not implemented.');
  }
  findByName(name: string): Products {
    throw new Error('Method not implemented.');
  }
}

export default ProductsRepositoryImplementation;
