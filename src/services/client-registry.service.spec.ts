import { Test, TestingModule } from '@nestjs/testing';
import { ClientRegistryService } from './client-registry.service';

describe('ClientRegistryService', () => {
  let service: ClientRegistryService;

  beforeEach(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- ok
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientRegistryService],
    }).compile();

    //service = module.get<ClientRegistryService>(ClientRegistryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
