import { AfterViewInit, ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PrinterInstallation } from '../models/requests-for-printer-installation';
import { PrinterInstallationService } from '../printer-installation.service';
import { EditPrinterInstallationComponent } from 'src/app/edit-printer-installation/edit-printer-installation/edit-printer-installation.component'
import { EditPrinterInstallationService } from '../edit-printer-installation/edit-printer-installation/service/edit-printer-installation-service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-printer-installation',
  templateUrl: './printer-installation.component.html',
  styleUrls: ['./printer-installation.component.scss']
})

export class PrinterInstallationComponent implements OnInit{
  title = 'InfrastructureServicesAG';
  requests: PrinterInstallation[] = [];
  request?: PrinterInstallation;
  isVisibleEditModal = false;
  isVisibleCreateModal = false;
  isOkLoading = false;

  constructor(
    private authService: AuthService,
    private printerInstallationService: PrinterInstallationService,
    private editPrinterInstallationService: EditPrinterInstallationService,
    private modalService: NzModalService,
    ){
  }

  ngOnInit(): void {
    console.log("Estou no ngOnInit - COMPONENT")
    this.printerInstallationService
      .getRequestForPrinterInstallation()
      .subscribe((result: PrinterInstallation[]) => (this.requests = result));
  }

  formatDate(date: any) {
    this.printerInstallationService.formatDate(date);
  }

  showModalCreate(){
    this.request = new PrinterInstallation();
    this.isVisibleCreateModal = true;
  }
  
  showModalEdit(request: PrinterInstallation) {
    this.request = request;
    this.isVisibleEditModal = true;
  }

  showDeleteConfirm(request: PrinterInstallation): void {
    this.modalService.confirm({
      nzTitle: 'Você tem certeza que deseja excluir essa requisição?',
      nzContent: `<b style="color: red;"></br>Nome: ${request.printerName}</br>Local: ${request.location}</b>`,
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => { 
        this.deleteRequest(request)
        setTimeout(() => {
          this.ngOnInit()
          this.isOkLoading = false;
        }, 100);
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel'),
    });
  }

  handleCancel(): void {
    this.isVisibleEditModal = false;
    this.isVisibleCreateModal = false;
  }
    
  deleteRequest(request: PrinterInstallation){
    this.editPrinterInstallationService.deleteRequest(request)
  }
  
  createRequest(request: PrinterInstallation){
    this.editPrinterInstallationService.createRequest(request)
    this.ngOnInit()

    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisibleCreateModal = false;
      this.isOkLoading = false;
    }, 100);

    this.success();
  }

  updateRequest(request: PrinterInstallation){
    this.editPrinterInstallationService.updateRequest(request)

    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisibleEditModal = false;
      this.isOkLoading = false;
    }, 100);

    this.success();
  }

  success(): void {
    const modal = this.modalService.success({
      nzTitle: 'Feito!',
      nzContent: 'A sua requisição foi atualizada com sucesso!',
      nzOnOk: () => {}
    });

    setTimeout(() => modal.destroy(), 1800);
  }

  logout(){
    this.authService.logout();
  }
}
