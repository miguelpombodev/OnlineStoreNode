export interface IResponse {
  user: {
    Name: string;
    Email: string;
  };
  token: string;
  cartId: string;
}
