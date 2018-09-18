import { TestBed, inject } from '@angular/core/testing';

import { MopidyService } from './mopidy.service';

describe('MopidyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MopidyService]
    });
  });

  it('should be created', inject([MopidyService], (service: MopidyService) => {
    expect(service).toBeTruthy();
  }));
});
