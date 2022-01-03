import ProductType from '../Entities/ProductType';
import { ICreateProductTypeDTO } from './DTOs/ICreateProductTypeDTO';

export interface IProductTypesRepository {
  create({ Name, Description }: ICreateProductTypeDTO): void;
  listAll(): ProductType[];
  findById(id: string): ProductType;
  findByName(name: string): ProductType;
}
