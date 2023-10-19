import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterInstallationComponent } from './printer-installation.component';

describe('PrinterInstallationComponent', () => {
  let component: PrinterInstallationComponent;
  let fixture: ComponentFixture<PrinterInstallationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrinterInstallationComponent]
    });
    fixture = TestBed.createComponent(PrinterInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
