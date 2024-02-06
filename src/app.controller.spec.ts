import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { Sequelize } from 'sequelize-typescript';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: Sequelize,
          useValue: new Sequelize({
            dialect: 'mysql',
          }),
        },
      ],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(appService).toBeDefined();
  });

  it('should have a Sequelize instance', () => {
    expect(appService['sequelize']).toBeInstanceOf(Sequelize);
  });
});
