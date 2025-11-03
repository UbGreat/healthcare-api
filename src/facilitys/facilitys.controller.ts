import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FacilitysService } from './facilitys.service';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';

@Controller('facilitys')
export class FacilitysController {
  constructor(private readonly facilitysService: FacilitysService) {}

  @Post()
  create(@Body() createFacilityDto: CreateFacilityDto) {
    return this.facilitysService.create(createFacilityDto);
  }

  @Get()
  findAll() {
    return this.facilitysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facilitysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacilityDto: UpdateFacilityDto) {
    return this.facilitysService.update(+id, updateFacilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facilitysService.remove(+id);
  }
}
