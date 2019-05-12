import { TestBed } from '@angular/core/testing';

import { StoreMsgService } from './store-msg.service';

describe('StoreMsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreMsgService = TestBed.get(StoreMsgService);
    expect(service).toBeTruthy();
  });
});
