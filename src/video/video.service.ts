import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Video } from './video.schema'; // Importe a interface Video

@Injectable()
export class VideoService {
  private s3: AWS.S3;
  private readonly bucketName = 'pandaplay';

  constructor(
    @InjectModel('Video') private videoModel: Model<Video>, // Injeta o modelo Video
  ) {
    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: 'us-east-2', // Altere para a sua região
    });
  }

  // Método para obter a URL assinada do vídeo
  async getSignedUrl(videoPath: string): Promise<string> {
    const params = {
      Bucket: this.bucketName,
      Key: videoPath,
      Expires: 60 * 60, // Link expira em 1 hora
    };

    return this.s3.getSignedUrlPromise('getObject', params);
  }

  // Método para listar todos os vídeos no banco de dados MongoDB
  async listAllVideos(): Promise<Video[]> {
    return this.videoModel.find().exec();
  }
}
