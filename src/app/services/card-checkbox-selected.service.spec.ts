import { TestBed } from '@angular/core/testing';

import { CardCheckboxSelectedService } from './card-checkbox-selected.service';

describe('CardCheckboxSelectedService', () => {
  let service: CardCheckboxSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardCheckboxSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
