import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() body) {
    return this.userService.register(body.email, body.password);
  }

  @Get(':email')
  async getUserByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }
}
