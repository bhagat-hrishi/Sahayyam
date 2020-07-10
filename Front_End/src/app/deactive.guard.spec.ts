import { TestBed } from '@angular/core/testing';

import { DeactiveGuard } from './deactive.guard';

describe('DeactiveGuard', () => {
  let guard: DeactiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
