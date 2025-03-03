import { Controller, Get, Query } from '@nestjs/common';
import { VideoService } from './video.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Videos')
@Controller('videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get('get-url')
  @ApiOperation({ summary: 'Get signed video URL' })
  async getVideoUrl(@Query('path') path: string): Promise<string> {
    return await this.videoService.getSignedUrl(path);
  }

  @Get()
  @ApiOperation({ summary: 'List all videos' })
  async getAllVideos() {
    return this.videoService.listAllVideos();
  }
}