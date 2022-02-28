import Product from '../Entities/Product';
import { ICreateProductDTO } from './DTOs/ICreateProductDTO';

export interface IProductsRepository {
  create({
    Name,
    TypeId,
    Sku,
    Value,
    StockAmount,
  }: ICreateProductDTO): Promise<Product>;
  listByCategory(categoryId: number): Promise<Product[]>;
  findById(id: string): Promise<Product>;
  findByName(name: string): Promise<Product>;
  update(productInfoUpdate: Product): Promise<Product>;
  delete(id: string): Promise<void>;
}
