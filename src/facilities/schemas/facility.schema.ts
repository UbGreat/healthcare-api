/* eslint-disable prettier/prettier */
// facility.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Organization } from '../../organizations/schemas/organization.schema';

@Schema({ timestamps: true })
export class Facility extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'Organization', required: true })
  organization: Organization;

  @Prop()
  address?: string;

  @Prop()
  timezone?: string;
}

export const FacilitySchema = SchemaFactory.createForClass(Facility);
