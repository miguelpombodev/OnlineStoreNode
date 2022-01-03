import Product from '../Entities/Product';
import { ICreateProductDTO } from './DTOs/ICreateProductDTO';

export interface IProductsRepository {
  create({
    Name,
    Sku,
    TypeId,
    Value,
    StockAmount,
    ProductUrl,
  }: ICreateProductDTO): Promise<void>;
  listAll(): Promise<Product[]>;
  findById(id: string): Promise<Product>;
  findByName(name: string): Promise<Product>;
}
