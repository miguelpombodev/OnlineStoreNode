import { container } from 'tsyringe';
import ProductsRepositoryImplementation from '@Modules/Products/Repositories/Implementations/ProductsRepositoryImplementation';
import { IProductsRepository } from '@Modules/Products/Repositories/IProductsRepository';
import CustomersRepositoryImplementations from '@Modules/Users/Repositories/Implementations/CustomersRepositoryImplementations';
import { ICustomersRepository } from '@Modules/Users/Repositories/ICustomersRepositories';
import CartsRepositoryImplementations from '@Modules/Cart/Repositories/Implementations/CartsRepositoryImplementations';
import { ICartsRepository } from '@Modules/Cart/Repositories/ICartsRepositories';

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepositoryImplementation
);

container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepositoryImplementations
);

container.registerSingleton<ICartsRepository>(
  'CartsRepository',
  CartsRepositoryImplementations
);
