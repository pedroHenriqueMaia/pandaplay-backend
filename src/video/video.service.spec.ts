// import { Test, TestingModule } from '@nestjs/testing';
// import { VideoService } from './video.service';
// import { getModelToken } from '@nestjs/mongoose';
// import { Video } from './video.schema';

// describe('VideoService', () => {
//   let service: VideoService;
//   let videoModel: any;

//   beforeEach(async () => {
//     videoModel = {
//       find: jest.fn(),
//     };

//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         VideoService,
//         {
//           provide: getModelToken('Video'),
//           useValue: videoModel,
//         },
//       ],
//     }).compile();

//     service = module.get<VideoService>(VideoService);
//   });

//   describe('listAllVideos', () => {
//     it('should return all videos from the database', async () => {
//       const videos = [
//         { id: 1, title: 'Video 1', url: 'https://video1.com' },
//         { id: 2, title: 'Video 2', url: 'https://video2.com' },
//       ];

//       videoModel.find.mockResolvedValue(videos);

//       const result = await service.listAllVideos();

//       expect(videoModel.find).toHaveBeenCalled();
//       expect(result).toEqual(videos);
//     });
//   });
// });
