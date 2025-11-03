/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

@Schema({ timestamps: true })
export class Ehr extends Document {
  @Prop({ required: true })
  diagnosis: string;

  @Prop({ required: true })
  treatment: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  patient: User;
}

export const EhrSchema = SchemaFactory.createForClass(Ehr);
