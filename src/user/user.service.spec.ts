// import { Test, TestingModule } from '@nestjs/testing';
// import { UserService } from './user.service';
// import { getModelToken } from '@nestjs/mongoose';

// describe('UserService', () => {
//   let service: UserService;
//   let userModel: any;

//   beforeEach(async () => {
//     userModel = {
//       findOne: jest.fn(),
//       create: jest.fn(),
//     };

//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         UserService,
//         {
//           provide: getModelToken('User'),
//           useValue: userModel,
//         },
//       ],
//     }).compile();

//     service = module.get<UserService>(UserService);
//   });

//   describe('findByEmail', () => {
//     it('should call findOne with the correct email and return the user data', async () => {
//       const email = 'test@test.com';
//       const user = { email, name: 'Test User' };

//       userModel.findOne.mockResolvedValue(user); // Mockando retorno do findOne

//       const result = await service.findByEmail(email);

//       expect(userModel.findOne).toHaveBeenCalledWith({ email });
//       expect(result).toEqual(user);
//     });

//     it('should return null if no user is found', async () => {
//       const email = 'nonexistent@test.com';

//       userModel.findOne.mockResolvedValue(null); // Retorno simulado de "não encontrado"

//       const result = await service.findByEmail(email);

//       expect(userModel.findOne).toHaveBeenCalledWith({ email });
//       expect(result).toBeNull();
//     });
//   });

//   describe('findOrCreateGoogleUser', () => {
//     it('should find or create user by email', async () => {
//       const email = 'test@test.com';
//       const user = { email, name: 'Test User' };

//       userModel.findOne.mockResolvedValue(null); // Mockando para não encontrar o usuário
//       userModel.create.mockResolvedValue(user); // Mockando criação do usuário

//       const result = await service.findOrCreateGoogleUser(email);

//       expect(userModel.findOne).toHaveBeenCalledWith({ email });
//       expect(userModel.create).toHaveBeenCalledWith({ email });
//       expect(result).toEqual(user);
//     });
//   });
// });
