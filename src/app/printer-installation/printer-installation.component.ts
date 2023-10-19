import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PrinterInstallation } from '../models/requests-for-printer-installation';
import { PrinterInstallationService } from '../printer-installation.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-printer-installation',
  templateUrl: './printer-installation.component.html',
  styleUrls: ['./printer-installation.component.scss']
})

export class PrinterInstallationComponent implements OnInit{
  title = 'InfrastructureServicesAG';
  requests: PrinterInstallation[] = [];
  request?: PrinterInstallation;

  constructor(private authService: AuthService, private printerInstallationService: PrinterInstallationService, private datePipe: DatePipe){
  }

  ngOnInit(): void {
    console.log("Estou no ngOnInit - COMPONENT")
    this.printerInstallationService
      .getRequestForPrinterInstallation()
      .subscribe((result: PrinterInstallation[]) => (this.requests = result));
  }

  formatDate(date: any) {
    if (!date) {
      return '';
    }

    // const parseDate = new Date(date);

    // if (isNaN(parseDate.getTime())) {
    //   return date;
    // }
  
    return this.datePipe.transform(date, 'dd-MM-yyyy');
  }

  initNewRequest(){
    this.request = new PrinterInstallation();
  }

  editRequest(request: PrinterInstallation) {
    this.request = request;
  }

  logout(){
    this.authService.logout();
  }
}
