import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Get,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from 'src/guard/local.guard';
import { GoogleAuthGuard } from 'src/guard/google.guard';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('register')
  async register(@Body() body) {
    return this.authService.register(body.email, body.password);
  }

  @Post('login')
  async login(@Req() req) {
    console.log(req, 'ts=etse');
    return this.authService.validateUser(req.body.email, req.body.password);
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleLogin() {}

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleCallback(@Req() req, @Res() res) {
    console.log(res);
    const { access_token } = req.user;
    await this.userService.findOrCreateGoogleUser(undefined, access_token);
    res.redirect(`http://localhost:5173/callback?access_token=${access_token}`);
  }
}
