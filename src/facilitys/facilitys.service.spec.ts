import { Test, TestingModule } from '@nestjs/testing';
import { FacilitysService } from './facilitys.service';

describe('FacilitysService', () => {
  let service: FacilitysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacilitysService],
    }).compile();

    service = module.get<FacilitysService>(FacilitysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
