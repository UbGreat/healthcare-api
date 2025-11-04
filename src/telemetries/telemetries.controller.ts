import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TelemetriesService } from './telemetries.service';
import { CreateTelemetryDto } from './dto/create-telemetry.dto';
import { UpdateTelemetryDto } from './dto/update-telemetry.dto';

@Controller('telemetries')
export class TelemetriesController {
  constructor(private readonly telemetriesService: TelemetriesService) {}

  @Post()
  create(@Body() createTelemetryDto: CreateTelemetryDto) {
    return this.telemetriesService.create(createTelemetryDto);
  }

  @Get()
  findAll() {
    return this.telemetriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.telemetriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTelemetryDto: UpdateTelemetryDto) {
    return this.telemetriesService.update(+id, updateTelemetryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.telemetriesService.remove(+id);
  }
}
