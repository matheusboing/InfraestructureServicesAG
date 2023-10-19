import { TestBed } from '@angular/core/testing';

import { PrinterInstallationService } from './printer-installation.service';

describe('PrinterInstallationService', () => {
  let service: PrinterInstallationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrinterInstallationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
