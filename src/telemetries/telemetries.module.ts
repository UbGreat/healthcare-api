import { Module } from '@nestjs/common';
import { TelemetriesService } from './telemetries.service';
import { TelemetriesController } from './telemetries.controller';

@Module({
  controllers: [TelemetriesController],
  providers: [TelemetriesService],
})
export class TelemetriesModule {}
