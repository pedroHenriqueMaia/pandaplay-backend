import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ schema: { properties: { email: { type: 'string' }, password: { type: 'string' } } } })
  async register(@Body() body) {
    return this.userService.register(body.email, body.password);
  }

  @Get(':email')
  @ApiOperation({ summary: 'Get user by email' })
  async getUserByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }
}
