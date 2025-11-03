import { Test, TestingModule } from '@nestjs/testing';
import { FacilitysController } from './facilitys.controller';
import { FacilitysService } from './facilitys.service';

describe('FacilitysController', () => {
  let controller: FacilitysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacilitysController],
      providers: [FacilitysService],
    }).compile();

    controller = module.get<FacilitysController>(FacilitysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
