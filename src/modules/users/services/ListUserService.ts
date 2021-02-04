import { getCustomRepository } from 'typeorm';

import UsersRepository from '../typeorm/repositories/UsersRepository';
import User from '../typeorm/entities/User';

class ListUserService {
  public async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.find({
      order: {
        name: 'ASC',
      },
    });

    return users;
  }
}

export default ListUserService;
