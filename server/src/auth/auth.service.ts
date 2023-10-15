import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { User } from './user.entity';
import { FindOneOptions } from 'typeorm';
import { JwtService } from '@nestjs/jwt/dist';
import hash from 'src/utils/hash';
import { LogininFailed } from 'src/customError/user.exception';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    return this.userRepository.createUser(authCredentialDto);
  }

  async signIn(
    authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialDto;
    const user = await this.userRepository.findOne({
      where: {
        username: username,
      },
    });

    const hashedPassword = hash(password);
    if (user && user.password === hashedPassword) {
      const payload = { username };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    }
    throw new LogininFailed();
  }
}
