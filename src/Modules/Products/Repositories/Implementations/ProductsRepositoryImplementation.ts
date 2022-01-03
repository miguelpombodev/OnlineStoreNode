import { getRepository, Repository } from 'typeorm';
import Product from '../../Models/Product';
import { ICreateProductDTO } from '../DTOs/ICreateProductDTO';
import { IProductsRepository } from '../IProductsRepository';

class ProductsRepositoryImplementation implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async create({
    Name,
    Sku,
    TypeId,
    Value,
    StockAmount,
    ProductUrl,
  }: ICreateProductDTO): Promise<void> {
    try {
      const productCreated = await this.repository.create({
        Name,
        Sku,
        TypeId,
        Value,
        StockAmount,
        ProductUrl,
      });

      await this.repository.save(productCreated);
    } catch {}
  }
  async listAll(): Promise<Product[]> {
    const productsList = await this.repository.find();

    return productsList;
  }
  findById(id: string): Product {
    throw new Error('Method not implemented.');
  }
  findByName(name: string): Product {
    throw new Error('Method not implemented.');
  }
}

export default ProductsRepositoryImplementation;
