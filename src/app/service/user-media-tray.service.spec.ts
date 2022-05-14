import { TestBed } from '@angular/core/testing';

import { UserMediaTrayService } from './user-media-tray.service';

describe('UserMediaTrayService', () => {
  let service: UserMediaTrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMediaTrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
