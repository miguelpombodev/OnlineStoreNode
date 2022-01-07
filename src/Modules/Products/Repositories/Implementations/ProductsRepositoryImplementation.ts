import { getRepository, Repository } from 'typeorm';
import Product from '../../Entities/Product';
import { ICreateProductDTO } from '../DTOs/ICreateProductDTO';
import { IProductsRepository } from '../IProductsRepository';
import { v4 as uuid } from 'uuid';

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
    StockAmount = 0,
    ProductUrl,
  }: ICreateProductDTO): Promise<Product> {
    const Id = uuid();

    try {
      const productCreated = this.repository.create({
        Id,
        Name,
        Sku,
        TypeId,
        Value,
        StockAmount,
        ProductUrl,
      });

      await this.repository.save(productCreated);
      return productCreated;
    } catch (e) {
      throw new Error(e);
    }
  }
  async listAll(): Promise<Product[]> {
    const productsList = await this.repository.find();

    return productsList;
  }
  async findById(id: string): Promise<Product> {
    const product = await this.repository.findOne(id);

    return product;
  }
  async findByName(name: string): Promise<Product> {
    const product = await this.repository.findOne(name);

    return product;
  }

  async updateProduct(id: number): Promise<Product> {}
}

export default ProductsRepositoryImplementation;
