/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ehr } from './schemas/ehr.schema';
import { User } from 'src/users/schemas/user.schema';
import { CreateEhrDto } from './dto/create-ehr.dto';
import { UpdateEhrDto } from './dto/update-ehr.dto';

@Injectable()
export class EhrsService {
  constructor(
    @InjectModel(Ehr.name) private ehrModel: Model<Ehr>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async create(createEhrDto: CreateEhrDto, patientId: string): Promise<Ehr> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const patient = await this.userModel.findById(patientId);
    if (!patient) throw new NotFoundException('Patient not found');

    const ehr = new this.ehrModel({
      ...createEhrDto,
      patient: patient._id,
    });

    return ehr.save();
  }

  async findAll() {
    return this.ehrModel.find().populate('patient').exec();
  }

  async findOne(id: string) {
    const ehr = await this.ehrModel.findById(id).populate('patient').exec();
    if (!ehr) throw new NotFoundException('EHR not found');
    return ehr;
  }

  async update(id: string, updateEhrDto: UpdateEhrDto) {
    return this.ehrModel.findByIdAndUpdate(id, updateEhrDto, { new: true });
  }

  async remove(id: string) {
    return this.ehrModel.findByIdAndDelete(id);
  }
}
