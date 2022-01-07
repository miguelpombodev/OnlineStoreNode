import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ProductsService from '../Services/ProductsService';

class ProductsController {
  async listAll(request: Request, response: Response): Promise<Response> {
    const _productService = container.resolve(ProductsService);
    const productBody = await _productService.listAll();

    return response.json(productBody);
  }

  async create(request: Request, response: Response): Promise<void> {
    const _productService = container.resolve(ProductsService);

    const body = request.body;

    const creationResult = await _productService.create(body);

    if (creationResult === null) {
      response.status(404).json({
        error: 'Product not found',
      });
    }

    response.json(creationResult);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const _productService = container.resolve(ProductsService);

    const { productId } = request.params;

    const updateResult = _productService.update(productId);

    return response.json(updateResult);
  }
}

export default ProductsController;
