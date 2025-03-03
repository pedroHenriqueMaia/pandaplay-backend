import { Controller, Get, Query } from '@nestjs/common';
import { VideoService } from './video.service';

@Controller('videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get('get-url')
  async getVideoUrl(@Query('path') path: string): Promise<string> {
    console.log(await this.videoService.getSignedUrl(path));
    return await this.videoService.getSignedUrl(path);
  }

  @Get()
  async getAllVideos() {
    console.log('test');
    return this.videoService.listAllVideos();
  }
}
