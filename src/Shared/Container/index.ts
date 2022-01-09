import { container } from 'tsyringe';
import ProductsRepositoryImplementation from '../../Modules/Products/Repositories/Implementations/ProductsRepositoryImplementation';
import { IProductsRepository } from '../../Modules/Products/Repositories/IProductsRepository';
import CustomersRepositoryImplementations from '../../Modules/Users/Repositories/Implementations/CustomersRepositoryImplementations';
import { ICustomersRepository } from '../../Modules/Users/Repositories/ICustomersRepositories';

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepositoryImplementation
);

container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepositoryImplementations
);
