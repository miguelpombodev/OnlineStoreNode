import { container } from 'tsyringe';
import ProductsRepositoryImplementation from '../../Modules/Products/Repositories/Implementations/ProductsRepositoryImplementation';
import { IProductsRepository } from '../../Modules/Products/Repositories/IProductsRepository';
import UsersRepositoryImplementations from '../../Modules/Users/Repositories/Implementations/UsersRepositoryImplementations';
import { IUsersRepositories } from '../../Modules/Users/Repositories/IUsersRepositories';

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepositoryImplementation
);

container.registerSingleton<IUsersRepositories>(
  'UsersRepository',
  UsersRepositoryImplementations
);
