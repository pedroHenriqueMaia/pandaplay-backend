// import { Test, TestingModule } from '@nestjs/testing';
// import { UserController } from './user.controller';
// import { UserService } from './user.service';

// describe('UserController', () => {
//   let userController: UserController;
//   let userService: UserService;

//   beforeEach(async () => {
//     const userServiceMock = {
//       register: jest.fn().mockResolvedValue({ message: 'User registered successfully' }),
//       findByEmail: jest.fn().mockResolvedValue({ email: 'test@example.com', password: 'password' }),
//     };

//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [UserController],
//       providers: [
//         { provide: UserService, useValue: userServiceMock },
//       ],
//     }).compile();

//     userController = module.get<UserController>(UserController);
//     userService = module.get<UserService>(UserService);
//   });

//   it('should be defined', () => {
//     expect(userController).toBeDefined();
//   });

//   describe('register', () => {
//     it('should call userService.register with correct parameters and return the result', async () => {
//       const body = { email: 'test@example.com', password: 'password' };
      
//       const result = await userController.register(body);

//       expect(result).toEqual({ message: 'User registered successfully' });
//       expect(userService.register).toHaveBeenCalledWith('test@example.com', 'password');
//     });
//   });

//   describe('getUserByEmail', () => {
//     it('should call userService.findByEmail with the correct email and return the user data', async () => {
//       const email = 'test@example.com';

//       const result = await userController.getUserByEmail(email);

//       expect(result).toEqual({ email: 'test@example.com', password: 'password' });
//       expect(userService.findByEmail).toHaveBeenCalledWith(email);
//     });
//   });
// });
