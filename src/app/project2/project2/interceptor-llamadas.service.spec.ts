import { TestBed } from '@angular/core/testing';

import { InterceptorLlamadasService } from './interceptor-llamadas.service';

describe('InterceptorLlamadasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterceptorLlamadasService = TestBed.get(InterceptorLlamadasService);
    expect(service).toBeTruthy();
  });
});
