/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EhrsService } from './ehrs.service';
import { EhrsController } from './ehrs.controller';
import { Ehr, EhrSchema } from './schemas/ehr.schema';
import { User, UserSchema } from 'src/users/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ehr.name, schema: EhrSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [EhrsController],
  providers: [EhrsService],
})
export class EhrsModule {}
