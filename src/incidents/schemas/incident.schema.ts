/* eslint-disable prettier/prettier */
// incident.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Alert } from '../../alerts/schemas/alert.schema';
import { Facility } from '../../facilities/schemas/facility.schema';
import { User } from '../../users/schemas/user.schema';

@Schema({ timestamps: true })
export class Incident extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Alert', required: true })
  alert: Alert;

  @Prop({ type: Types.ObjectId, ref: 'Facility' })
  facility: Facility;

  @Prop({ enum: ['new', 'dispatched', 'resolved'], default: 'new' })
  status: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
  responders: User[];

  @Prop({ type: Object })
  location?: Record<string, any>;

  @Prop()
  resolvedAt?: Date;
}

export const IncidentSchema = SchemaFactory.createForClass(Incident);
