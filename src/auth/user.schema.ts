import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  email: string;

  @Prop()
  password?: string;

  @Prop()
  googleId?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
