import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrinterInstallation } from './models/requests-for-printer-installation';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment.development';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class PrinterInstallationService {
  private url = "RequestForPrinterInstallation"
  constructor(
    private http: HttpClient,
    private datePipe: DatePipe,) { }

  public getRequestForPrinterInstallation(): Observable<PrinterInstallation[]> {
    console.log(`Estou no serviço do get!!!!`)
    return this.http.get<PrinterInstallation[]>(`${environment.apiUrl}/${this.url}`)
  }

  public updateRequest(request: PrinterInstallation): Observable<PrinterInstallation> {
    console.log(`Estou no serviço do update!!!! ${request}`)
    return this.http.put<PrinterInstallation>(`${environment.apiUrl}/${this.url}/${request.id}`, request)
  }

  public createRequest(request: PrinterInstallation): Observable<PrinterInstallation> {
    console.log(`Estou no serviço do create!!!! ${request}`)
    return this.http.post<PrinterInstallation>(`${environment.apiUrl}/${this.url}`, request)
  }

  public deleteRequest(request: PrinterInstallation): Observable<PrinterInstallation> {
    console.log(`Estou no serviço do delete!!!! ${request.id}`)
    return this.http.delete<PrinterInstallation>(`${environment.apiUrl}/${this.url}/${request.id}`)
  }

  public formatDate(date: any) {
    if (!date) {
      return '';
    }

    // const parseDate = new Date(date);

    // if (isNaN(parseDate.getTime())) {
    //   return date;
    // }
  
    return this.datePipe.transform(date, 'dd-MM-yyyy');
  }
}
