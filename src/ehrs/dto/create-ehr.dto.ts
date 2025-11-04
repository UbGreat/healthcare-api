/* eslint-disable prettier/prettier */
// ehrs/dto/create-ehr.dto.ts
import { IsMongoId, IsOptional, IsString } from 'class-validator';

export class CreateEhrDto {
 @IsMongoId()
  patient: string;

  @IsMongoId()
  author: string; // The User ID (e.g. doctor, nurse, admin)

  @IsOptional()
  @IsString()
  diagnosis?: string;

  @IsOptional()
  @IsString()
  treatment?: string;

  @IsOptional()
  notes?: Record<string, any>; 
}
