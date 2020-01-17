import { TestBed } from '@angular/core/testing';

import { PenguinService } from './penguin.service';

describe('PenguinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PenguinService = TestBed.get(PenguinService);
    expect(service).toBeTruthy();
  });
});
