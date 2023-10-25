import { Component, EventEmitter, Input, OnInit, Output, NgZone } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { AuthService } from 'src/app/auth.service';
import { PrinterInstallation } from 'src/app/models/requests-for-printer-installation';
import { PrinterInstallationService } from 'src/app/printer-installation.service';
import { PrinterInstallationComponent } from 'src/app/printer-installation/printer-installation.component'
import { EditPrinterInstallationService } from './service/edit-printer-installation-service';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-edit-printer-installation',
  templateUrl: './edit-printer-installation.component.html',
  styleUrls: ['./edit-printer-installation.component.scss'],
})
export class EditPrinterInstallationComponent implements AfterViewInit{
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  isVisible = false;
  isOkLoading = false;
  @Input() request?: PrinterInstallation;
  @Output() requestUpdated = new EventEmitter<PrinterInstallation>();

  constructor(
    private printerInstallationComponent: PrinterInstallationComponent,
    private editPrinterInstallationService: EditPrinterInstallationService,
    ){}

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
  
  ngAfterViewInit() {
    // Initialize the form and fields here
    this.form = new FormGroup({});
  }

  updateRequest(request: PrinterInstallation){
   this.editPrinterInstallationService.updateRequest(request);
  }

  deleteRequest(request: PrinterInstallation){
    this.editPrinterInstallationService.deleteRequest(request);
  }

  createRequest(request: PrinterInstallation){
    this.editPrinterInstallationService.createRequest(request);
  }

  onSubmit() {
    if (this.form.valid) {
      // Handle form submission here
      console.log(this.form.value);
      console.log(this.model);
    }
  }
}
