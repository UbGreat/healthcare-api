import { Test, TestingModule } from '@nestjs/testing';
import { TelemetrysController } from './telemetrys.controller';
import { TelemetrysService } from './telemetrys.service';

describe('TelemetrysController', () => {
  let controller: TelemetrysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TelemetrysController],
      providers: [TelemetrysService],
    }).compile();

    controller = module.get<TelemetrysController>(TelemetrysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
