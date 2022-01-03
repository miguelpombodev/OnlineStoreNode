import ProductsRepositoryImplementation from '../Repositories/Implementations/ProductsRepositoryImplementation';
import ProductsService from '../Services/ProductsService';
import ProductsController from './ProductsController';

export default () => {
  const productsRepository = new ProductsRepositoryImplementation();
  const productService = new ProductsService(productsRepository);
  const productsController = new ProductsController(productService);

  return productsController;
};
