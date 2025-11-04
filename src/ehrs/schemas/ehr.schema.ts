/* eslint-disable prettier/prettier */
// ehr.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Patient } from '../../patients/schemas/patient.schema';
import { User } from '../../users/schemas/user.schema';

@Schema({ timestamps: true })
export class Ehr extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Patient', required: true })
  patient: Patient;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author: User;

  @Prop()
  diagnosis?: string;

  @Prop()
  treatment?: string;

  @Prop({ type: Object })
  notes?: Record<string, any>;
}

export const EhrSchema = SchemaFactory.createForClass(Ehr);
