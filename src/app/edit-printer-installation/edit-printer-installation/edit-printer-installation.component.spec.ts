import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrinterInstallationComponent } from './edit-printer-installation.component';

describe('EditPrinterInstallationComponent', () => {
  let component: EditPrinterInstallationComponent;
  let fixture: ComponentFixture<EditPrinterInstallationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPrinterInstallationComponent]
    });
    fixture = TestBed.createComponent(EditPrinterInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
