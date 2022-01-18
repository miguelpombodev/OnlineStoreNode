export interface ICartsRepository {
  create(CustomerId: string, Purchased: number): Promise<string>;
}
