import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersPageComponent } from '../users-page/users-page.component';
import { PrinterInstallationComponent } from '../printer-installation/printer-installation.component';

const routes: Routes = [{
  path: '', component:AdminComponent,
  children: [{ path: '', component: PrinterInstallationComponent}],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
