import { DataSource, FindOneOptions, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { Injectable } from '@nestjs/common';
import { ExisitingId } from 'src/customError/user.exception';
import hash from 'src/utils/hash';

@Injectable()
export class UserRepository {
  #userRepository: Repository<User>;
  constructor(private dataSource: DataSource) {
    this.#userRepository = this.dataSource.getRepository(User);
  }
  async createUser(authCredential: AuthCredentialDto): Promise<void> {
    const { username, password } = authCredential;
    try {
      const check = await this.#userRepository.findOne({
        where: { username: username },
      });
      if (check) throw new ExisitingId();

      const hashedPassword = hash(password);
      const user = this.#userRepository.create({
        username,
        password: hashedPassword,
      });
      await this.#userRepository.save(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  async findOne(findOneOptions: FindOneOptions<User>) {
    return this.#userRepository.findOne(findOneOptions);
  }
}
