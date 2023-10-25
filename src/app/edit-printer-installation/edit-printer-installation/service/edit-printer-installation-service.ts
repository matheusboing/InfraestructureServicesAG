import { EventEmitter, Injectable, Output } from '@angular/core';
import { PrinterInstallation } from 'src/app/models/requests-for-printer-installation';
import { PrinterInstallationService } from 'src/app/printer-installation.service';

@Injectable({
  providedIn: 'root',
})

export class EditPrinterInstallationService {
  @Output() requestUpdated = new EventEmitter<PrinterInstallation>();
  
  constructor(
    private printerInstallationService: PrinterInstallationService,
    ){}
    
  updateRequest(request: PrinterInstallation){
    this.printerInstallationService
      .updateRequest(request)
      .subscribe((request: PrinterInstallation) => this.requestUpdated.emit(request))
  }

  deleteRequest(request: PrinterInstallation){
    this.printerInstallationService
      .deleteRequest(request)
      .subscribe((request: PrinterInstallation) => this.requestUpdated.emit(request))
  }

  createRequest(request: PrinterInstallation){
    this.printerInstallationService
      .createRequest(request)
      .subscribe((request: PrinterInstallation) => this.requestUpdated.emit(request))
  }
}