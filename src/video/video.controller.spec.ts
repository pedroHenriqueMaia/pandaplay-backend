// import { Test, TestingModule } from '@nestjs/testing';
// import { VideoController } from './video.controller';
// import { VideoService } from './video.service';

// describe('VideoController', () => {
//   let videoController: VideoController;
//   let videoService: VideoService;

//   beforeEach(async () => {
//     const videoServiceMock = {
//       getSignedUrl: jest.fn().mockResolvedValue('https://signed-url.com/video'),
//       listAllVideos: jest.fn().mockResolvedValue([
//         { id: 1, title: 'Video 1', url: 'https://video1.com' },
//         { id: 2, title: 'Video 2', url: 'https://video2.com' },
//       ]),
//     };

//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [VideoController],
//       providers: [
//         { provide: VideoService, useValue: videoServiceMock },
//       ],
//     }).compile();

//     videoController = module.get<VideoController>(VideoController);
//     videoService = module.get<VideoService>(VideoService);
//   });

//   it('should be defined', () => {
//     expect(videoController).toBeDefined();
//   });

//   describe('getVideoUrl', () => {
//     it('should call videoService.getSignedUrl with the correct path and return the URL', async () => {
//       const path = 'video/path';
//       const result = await videoController.getVideoUrl(path);

//       expect(result).toBe('https://signed-url.com/video');
//       expect(videoService.getSignedUrl).toHaveBeenCalledWith(path);
//     });
//   });

//   describe('getAllVideos', () => {
//     it('should call videoService.listAllVideos and return a list of videos', async () => {
//       const result = await videoController.getAllVideos();

//       expect(result).toEqual([
//         { id: 1, title: 'Video 1', url: 'https://video1.com' },
//         { id: 2, title: 'Video 2', url: 'https://video2.com' },
//       ]);
//       expect(videoService.listAllVideos).toHaveBeenCalled();
//     });
//   });
// });
