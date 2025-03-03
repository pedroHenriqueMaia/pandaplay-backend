import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Video extends Document {
  @Prop()
  nome: string;

  @Prop()
  descricao: string;

  @Prop()
  duracao: string;

  @Prop()
  quandoLancou: string;

  @Prop()
  categoria: string;

  @Prop()
  nomeThumbnail: string;

  @Prop({ required: false })
  nomeArquivo?: string; // Campo opcional, apenas para os filmes com arquivo
}

export const VideoSchema = SchemaFactory.createForClass(Video);
