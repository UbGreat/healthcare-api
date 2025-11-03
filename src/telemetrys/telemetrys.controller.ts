import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TelemetrysService } from './telemetrys.service';
import { CreateTelemetryDto } from './dto/create-telemetry.dto';
import { UpdateTelemetryDto } from './dto/update-telemetry.dto';

@Controller('telemetrys')
export class TelemetrysController {
  constructor(private readonly telemetrysService: TelemetrysService) {}

  @Post()
  create(@Body() createTelemetryDto: CreateTelemetryDto) {
    return this.telemetrysService.create(createTelemetryDto);
  }

  @Get()
  findAll() {
    return this.telemetrysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.telemetrysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTelemetryDto: UpdateTelemetryDto) {
    return this.telemetrysService.update(+id, updateTelemetryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.telemetrysService.remove(+id);
  }
}
