import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import CustomersRepositoryImplementations from '../Modules/Users/Repositories/Implementations/CustomersRepositoryImplementations';

interface IPaylod {
  sub: string;
}

async function ensureAuthenticatedUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token is missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: userId } = verify(
      token,
      '815a7374c650d6715af06a8722fdcfce576714091874d5934efb3c544b527ed7'
    ) as IPaylod;

    const customersRepository = new CustomersRepositoryImplementations();
    const userNotExists = await customersRepository.findById(userId);

    if (!userNotExists) {
      throw new Error('User does not exists');
    }

    return next();
  } catch {
    throw new Error('Invalid token!');
  }
}

export default ensureAuthenticatedUser;
