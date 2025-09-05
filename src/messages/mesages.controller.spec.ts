import { Test, TestingModule } from '@nestjs/testing';
import { MesagesController } from './mesages.controller';

describe('MesagesController', () => {
  let controller: MesagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MesagesController],
    }).compile();

    controller = module.get<MesagesController>(MesagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
