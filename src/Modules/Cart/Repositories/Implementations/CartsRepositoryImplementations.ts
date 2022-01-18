import { getRepository, Repository } from 'typeorm';
import Carts from '../../Entities/Cart';
import { ICartsRepository } from '../ICartsRepositories';
import { v4 as uuid } from 'uuid';

class CartsRepositoryImplementations implements ICartsRepository {
  private repository: Repository<Carts>;

  constructor() {
    this.repository = getRepository(Carts);
  }
  async create(CustomerId: string, Purchased = 0): Promise<string> {
    const Id = uuid();

    try {
      const userCart = this.repository.create({
        Id,
        CustomerId,
        Purchased,
      });

      await this.repository.save(userCart);
      return userCart.Id;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default CartsRepositoryImplementations;
