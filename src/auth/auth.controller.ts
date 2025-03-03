import { Controller, Post, Body, UseGuards, Req, Get, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from 'src/guard/local.guard';
import { GoogleAuthGuard } from 'src/guard/google.guard';
import { UserService } from 'src/user/user.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ schema: { properties: { email: { type: 'string' }, password: { type: 'string' } } } })
  @ApiResponse({ status: 201, description: 'User successfully registered' })
  async register(@Body() body) {
    return this.authService.register(body.email, body.password);
  }

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiBody({ schema: { properties: { email: { type: 'string' }, password: { type: 'string' } } } })
  @ApiResponse({ status: 200, description: 'User authenticated' })
  async login(@Req() req) {
    return this.authService.validateUser(req.body.email, req.body.password);
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  @ApiOperation({ summary: 'Google OAuth login' })
  async googleLogin() {}

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  @ApiOperation({ summary: 'Google OAuth callback' })
  async googleCallback(@Req() req, @Res() res) {
    const { access_token } = req.user;
    await this.userService.findOrCreateGoogleUser(undefined, access_token);
    res.redirect(`http://localhost:5173/callback?access_token=${access_token}`);
  }
}