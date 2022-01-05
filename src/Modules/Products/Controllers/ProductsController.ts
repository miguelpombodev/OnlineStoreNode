import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ProductsService from '../Services/ProductsService';

class ProductsController {
  async listAll(request: Request, response: Response): Promise<Response> {
    const _productService = container.resolve(ProductsService);
    const productBody = await _productService.listAll();

    return response.json(productBody);
  }
}

export default ProductsController;
