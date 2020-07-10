import { TestBed } from '@angular/core/testing';

import { Donor1Guard } from './donor1.guard';

describe('Donor1Guard', () => {
  let guard: Donor1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Donor1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
