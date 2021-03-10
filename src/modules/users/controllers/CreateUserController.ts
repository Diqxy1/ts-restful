import { Request, Response } from 'express';

import CreateUserEmailService from '../services/CreateUserEmailService';

export default class CreateUserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, name } = request.body;

    const sendForgotPasswordEmail = new CreateUserEmailService();

    await sendForgotPasswordEmail.execute({
      email,
      name,
    });

    return response.status(204).json();
  }
}
