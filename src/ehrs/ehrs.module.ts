/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EhrsService } from './ehrs.service';
import { EhrsController } from './ehrs.controller';
import { Ehr, EhrSchema } from './schemas/ehr.schema';
import { User, UserSchema } from 'src/users/schemas/user.schema';
import { Patient, PatientSchema } from 'src/patients/schemas/patient.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ehr.name, schema: EhrSchema },
      { name: User.name, schema: UserSchema },
      { name: Patient.name, schema: PatientSchema },
    ]),
  ],
  controllers: [EhrsController],
  providers: [EhrsService],
})
export class EhrsModule {}
