import { Request, Response } from 'express';
import ProductsService from '../Services/ProductsService';

class ProductsController {
  constructor(private _productService: ProductsService) {}

  async listAll(request: Request, response: Response): Promise<Response> {
    const productBody = await this._productService.listAll();

    return response.json(productBody);
  }
}

export default ProductsController;
