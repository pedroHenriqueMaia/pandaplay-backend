// import { Test, TestingModule } from '@nestjs/testing';
// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';
// import { UserService } from 'src/user/user.service';
// import { GoogleAuthGuard } from 'src/guard/google.guard';
// import { ExecutionContext } from '@nestjs/common';
// import { getMockRes } from '@jest-mock/express';

// describe('AuthController', () => {
//   let authController: AuthController;
//   let authService: AuthService;
//   let userService: UserService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [AuthController],
//       providers: [
//         {
//           provide: AuthService,
//           useValue: {
//             register: jest.fn().mockResolvedValue({ message: 'User registered' }),
//             validateUser: jest.fn().mockResolvedValue({ access_token: 'test_token' }),
//           },
//         },
//         {
//           provide: UserService,
//           useValue: {
//             findOrCreateGoogleUser: jest.fn().mockResolvedValue({ id: '1234' }),
//           },
//         },
//       ],
//     }).compile();

//     authController = module.get<AuthController>(AuthController);
//     authService = module.get<AuthService>(AuthService);
//     userService = module.get<UserService>(UserService);
//   });

//   it('should be defined', () => {
//     expect(authController).toBeDefined();
//   });

//   it('should register a user', async () => {
//     const result = await authController.register({ email: 'test@example.com', password: 'password' });
//     expect(authService.register).toHaveBeenCalledWith('test@example.com', 'password');
//     expect(result).toEqual({ message: 'User registered' });
//   });

//   it('should login a user', async () => {
//     const req = { body: { email: 'test@example.com', password: 'password' } };
//     const result = await authController.login(req);
//     expect(authService.validateUser).toHaveBeenCalledWith('test@example.com', 'password');
//     expect(result).toEqual({ access_token: 'test_token' });
//   });

//   it('should handle Google OAuth callback', async () => {
//     const { res, mockClear } = getMockRes();
//     mockClear();
//     const req = { user: { access_token: 'google_token' } };
//     await authController.googleCallback(req, res);
//     expect(userService.findOrCreateGoogleUser).toHaveBeenCalledWith(undefined, 'google_token');
//     expect(res.redirect).toHaveBeenCalledWith('http://localhost:5173/callback?access_token=google_token');
//   });
// });
