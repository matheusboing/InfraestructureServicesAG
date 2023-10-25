import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { UsersPageComponent } from './users-page/users-page.component';
import { PrinterInstallationComponent } from './printer-installation/printer-installation.component';
import { EditPrinterInstallationComponent } from './edit-printer-installation/edit-printer-installation/edit-printer-installation.component';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersPageComponent,
    PrinterInstallationComponent,
    EditPrinterInstallationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    NzTableModule,
    NzModalModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NzButtonModule
  ],
  providers: [
    DatePipe,
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
