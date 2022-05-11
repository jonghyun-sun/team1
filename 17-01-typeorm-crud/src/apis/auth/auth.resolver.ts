import { UnprocessableEntityException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/users.service';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}
//test
  @Mutation(() => String)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const user = await this.userService.findOne({ email });
    if (!user) throw new UnprocessableEntityException('이메일이 없습니다!!');
    const isAuthenticated = await bcrypt.compare(password, user.password);
    if (!isAuthenticated)
      throw new UnprocessableEntityException('암호가 틀렸습니다!!');

    const accessToken = this.authService.getAccessToken({ user });
    return accessToken;
  }
}
