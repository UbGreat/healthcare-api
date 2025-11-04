/* eslint-disable prettier/prettier */
// device.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Facility } from '../../facilities/schemas/facility.schema';
import { Patient } from '../../patients/schemas/patient.schema';

@Schema({ timestamps: true })
export class Device extends Document {
  @Prop({ required: true, unique: true })
  deviceId: string; // unique IoT identifier

  @Prop({ required: true })
  productModel: string;

  @Prop({ type: Types.ObjectId, ref: 'Facility' })
  facility: Facility;

  @Prop({ type: Types.ObjectId, ref: 'Patient', default: null })
  assignedTo?: Patient;

  @Prop({ enum: ['online', 'offline', 'maintenance'], default: 'offline' })
  status: string;

  @Prop()
  lastSeen?: Date;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
