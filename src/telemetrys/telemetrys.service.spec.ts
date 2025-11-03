import { Test, TestingModule } from '@nestjs/testing';
import { TelemetrysService } from './telemetrys.service';

describe('TelemetrysService', () => {
  let service: TelemetrysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TelemetrysService],
    }).compile();

    service = module.get<TelemetrysService>(TelemetrysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
