import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProductService from '../Services/CreateProductService';
import DeleteProductService from '../Services/DeleteProductService';
import ListProductsService from '../Services/ListProductsService';
import UpdateProductService from '../Services/UpdateProductService';

class ProductsController {
  async listCategorizedProducts(
    request: Request,
    response: Response
  ): Promise<Response> {
    const _productService = container.resolve(ListProductsService);

    const { category } = request.query;

    const productBody = await _productService.listByCategory(
      category as string
    );

    return response.json(productBody);
  }

  async listOne(request: Request, response: Response): Promise<Response> {
    const _productService = container.resolve(ListProductsService);

    const { id } = request.params;

    const productBody = await _productService.listOne(id);

    return response.json(productBody);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const _productService = container.resolve(CreateProductService);

    const body = request.body;

    const creationResult = await _productService.execute(body);

    return response.json(creationResult);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const _productService = container.resolve(UpdateProductService);

    const { id } = request.params;
    const body = request.body;

    const product = {
      Id: id,
      ...body,
    };

    const updateResult = await _productService.update(product);

    return response.json(updateResult);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const _productService = container.resolve(DeleteProductService);

    const { id } = request.params;

    const deleteResult = _productService.execute(id);

    return response.json(deleteResult);
  }
}

export default ProductsController;
