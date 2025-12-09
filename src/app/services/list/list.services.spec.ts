import { TestBed } from '@angular/core/testing';

import { ListServices } from './list.services';

describe('ListServices', () => {
  let service: ListServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
