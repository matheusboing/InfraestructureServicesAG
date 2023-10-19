import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { AuthService } from 'src/app/auth.service';
import { PrinterInstallation } from 'src/app/models/requests-for-printer-installation';
import { PrinterInstallationService } from 'src/app/printer-installation.service';
import { PrinterInstallationComponent } from 'src/app/printer-installation/printer-installation.component'

@Component({
  selector: 'app-edit-printer-installation',
  templateUrl: './edit-printer-installation.component.html',
  styleUrls: ['./edit-printer-installation.component.scss']
})
export class EditPrinterInstallationComponent implements OnInit{
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  @Input() request?: PrinterInstallation;
  @Output() requestUpdated = new EventEmitter<PrinterInstallation>();

  constructor(private printerInstallationService: PrinterInstallationService, private printerInstallationComponent: PrinterInstallationComponent){}

  fields: FormlyFieldConfig[] = [
    {
      key: 'printerName',
      type: 'input',
      props: {
        label: 'Nome da Impressora',
        required: true,
      },
    },
    {
      key: 'printerModel',
      type: 'input',
      props: {
        label: 'Modelo da Impressora',
        required: true,
      },
    },
    {
      key: 'location',
      type: 'input',
      props: {
        label: 'Localização',
        required: true,
      },
    },
    {
      key: 'typeOfConnection',
      type: 'select',
      props: {
        label: 'Tipo da conexão',
        options: [
          { label: 'Ethernet', value: 'ethernet' },
          { label: 'USB', value: 'usb' },
          { label: 'Wi-Fi', value: 'wifi' },
        ],
        required: true,
      },
    },
    {
      key: 'personResponsableForInstallation',
      type: 'input',
      props: {
        label: 'Responsável pela instalação',
        required: true,
      },
    },
    {
      key: 'installationDate',
      type: 'input',
      props: {
        label: 'Data da instalação',
        type: 'date',
        required: true,
      },
      hooks: {
        afterViewInit: (field) => {
          if (field.formControl?.value) {
            field.formControl.setValue(this.printerInstallationComponent.formatDate(field.formControl.value));
          }
        },
      },
    },
  ]
  
  ngOnInit(): void {}
  
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

  submit() {
    alert(JSON.stringify(this.model));
  }
}
