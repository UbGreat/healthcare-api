import { Module } from '@nestjs/common';
import { FacilitysService } from './facilitys.service';
import { FacilitysController } from './facilitys.controller';

@Module({
  controllers: [FacilitysController],
  providers: [FacilitysService],
})
export class FacilitysModule {}
