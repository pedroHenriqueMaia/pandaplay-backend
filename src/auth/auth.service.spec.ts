// import { AuthService } from './auth.service';
// import { JwtService } from '@nestjs/jwt';
// import { getModelToken } from '@nestjs/mongoose';
// import { BadRequestException } from '@nestjs/common';
// import * as bcrypt from 'bcryptjs';

// const mockUserModel = {
//   findOne: jest.fn(),
//   create: jest.fn(),
//   save: jest.fn(),
// };

// const mockJwtService = {
//   sign: jest.fn().mockReturnValue('mocked_token'),
// };

// describe('AuthService', () => {
//   let authService: AuthService;

//   beforeEach(() => {
//     authService = new AuthService(
//       mockUserModel as any,
//       mockJwtService as any,
//     );
//   });

//   describe('register', () => {
//     it('should throw an error if email is already registered', async () => {
//       mockUserModel.findOne.mockResolvedValue({ email: 'test@test.com' });
//       await expect(authService.register('test@test.com', 'password'))
//         .rejects.toThrow(BadRequestException);
//     });

//     it('should hash the password and save the user', async () => {
//       mockUserModel.findOne.mockResolvedValue(null);
//       mockUserModel.save.mockResolvedValue(true);

//       const result = await authService.register('test@test.com', 'password');
//       expect(result).toEqual({ access_token: 'mocked_token' });
//     });
//   });

//   describe('validateUser', () => {
//     it('should throw an error if user is not found', async () => {
//       mockUserModel.findOne.mockResolvedValue(null);
//       await expect(authService.validateUser('test@test.com', 'password'))
//         .rejects.toThrow(BadRequestException);
//     });


//   });
// });
