import { Request, Response } from 'express';

import CreateUserEmailService from '../services/CreateUserEmailService';

export default class CreateUserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, name } = request.body;

    const createUserEmailService = new CreateUserEmailService();

    await createUserEmailService.execute({
      email,
      name,
    });

    return response
      .status(204)
      .json('User created with success check your email');
  }
}
