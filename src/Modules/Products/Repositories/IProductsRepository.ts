import Product from '../Models/Product';
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
  findById(id: string): Product;
  findByName(name: string): Product;
}
