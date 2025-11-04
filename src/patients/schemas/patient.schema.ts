/* eslint-disable prettier/prettier */
// patient.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Facility } from '../../facilities/schemas/facility.schema';

@Schema({ timestamps: true })
export class Patient extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  otherName?: string;

  @Prop()
  gender?: string;

  @Prop()
  dateOfBirth?: Date;

  @Prop({ type: Types.ObjectId, ref: 'Facility', required: true })
  facility: Facility;

  @Prop({ type: Object })
  contactInfo?: Record<string, any>;

  @Prop({ type: Object })
  medicalHistory?: Record<string, any>;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
