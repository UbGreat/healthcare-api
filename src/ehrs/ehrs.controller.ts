/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Param, Get, Patch, Delete } from '@nestjs/common';
import { EhrsService } from './ehrs.service';
import { CreateEhrDto } from './dto/create-ehr.dto';
import { UpdateEhrDto } from './dto/update-ehr.dto';

@Controller('ehrs')
export class EhrsController {
  constructor(private readonly ehrsService: EhrsService) {}

  @Post(':patientId')
  create(@Param('patientId') patientId: string, @Body() dto: CreateEhrDto) {
    return this.ehrsService.create(dto, patientId);
  }

  @Get()
  findAll() {
    return this.ehrsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ehrsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEhrDto) {
    return this.ehrsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ehrsService.remove(id);
  }
}
