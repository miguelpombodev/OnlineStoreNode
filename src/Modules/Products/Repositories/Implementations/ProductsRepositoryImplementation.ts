import { getRepository, Repository } from 'typeorm';

import { ICreateProductDTO } from '../DTOs/ICreateProductDTO';
import { IProductsRepository } from '../IProductsRepository';
import { v4 as uuid } from 'uuid';
import removeTimestamps from '@Utils/removeTimestamps';
import Product from '@Modules/Products/Entities/Product';

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
      });

      await this.repository.save(productCreated);
      return productCreated;
    } catch (e) {
      throw new Error(e);
    }
  }
  async listByCategory(categoryId: number): Promise<Product[]> {
    const productsList = await this.repository.find({
      where: {
        TypeId: categoryId,
      },
      relations: ['Colors'],
    });

    productsList.forEach((prd) => {
      prd.Colors.forEach((color) => {
        removeTimestamps(color);
      });

      removeTimestamps(prd);
    });

    return productsList;
  }
  async findById(id: string): Promise<Product> {
    const product = await this.repository.findOne(id, {
      relations: ['Colors'],
    });

    return product;
  }
  async findByName(name: string): Promise<Product> {
    const product = await this.repository.findOne({
      where: {
        Name: name,
      },
    });

    return product;
  }

  async update(productInfoUpdate: Product): Promise<Product> {
    try {
      await this.repository.update(
        {
          Id: productInfoUpdate.Id,
        },
        productInfoUpdate
      );

      const updatedProduct = await this.repository.findOne(
        productInfoUpdate.Id
      );

      return updatedProduct;
    } catch (e) {
      throw new Error(e);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.repository.delete({ Id: id });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default ProductsRepositoryImplementation;
