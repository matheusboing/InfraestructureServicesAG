export class PrinterInstallation {
    id?: number;
    printerName = "";
    printerModel = "";
    location = "";
    typeOfConnection = "";
    personResponsableForInstallation = "";
    installationDate: Date = new Date();
    
    // constructor() {
    //     this.installationDate = new Date(this.installationDate.toLocaleDateString());
    // }
}
