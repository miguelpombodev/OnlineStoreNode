import Product from '../Entities/Product';
import { ICreateProductDTO } from './DTOs/ICreateProductDTO';

export interface IProductsRepository {
  create({
    Name,
    TypeId,
    Sku,
    Value,
    StockAmount,
    ProductUrl,
  }: ICreateProductDTO): Promise<Product>;
  listAll(): Promise<Product[]>;
  findById(id: string): Promise<Product>;
  findByName(name: string): Promise<Product>;
  update(id: string): Promise<Product>;
}
