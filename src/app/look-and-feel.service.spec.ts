import { TestBed, inject } from '@angular/core/testing';

import { LookAndFeelService } from './look-and-feel.service';

describe('LookAndFeelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LookAndFeelService]
    });
  });

  it('should be created', inject([LookAndFeelService], (service: LookAndFeelService) => {
    expect(service).toBeTruthy();
  }));
});
