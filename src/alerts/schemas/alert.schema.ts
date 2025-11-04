/* eslint-disable prettier/prettier */
// alert.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Patient } from '../../patients/schemas/patient.schema';
import { Device } from '../../devices/schemas/device.schema';

@Schema({ timestamps: true })
export class Alert extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Patient' })
  patient: Patient;

  @Prop({ type: Types.ObjectId, ref: 'Device' })
  device: Device;

  @Prop({ required: true })
  metric: string;

  @Prop({ required: true })
  message: string;

  @Prop({ enum: ['info', 'warning', 'critical'], default: 'info' })
  severity: string;

  @Prop({ enum: ['open', 'acknowledged', 'resolved'], default: 'open' })
  status: string;
}

export const AlertSchema = SchemaFactory.createForClass(Alert);
