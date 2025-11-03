import { Module } from '@nestjs/common';
import { TelemetrysService } from './telemetrys.service';
import { TelemetrysController } from './telemetrys.controller';

@Module({
  controllers: [TelemetrysController],
  providers: [TelemetrysService],
})
export class TelemetrysModule {}
