import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generar',
  templateUrl: './generar.page.html',
  styleUrls: ['./generar.page.scss'],
})
export class GenerarPage implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  qrCodeString= 'Hola Mundo'; 
  scannedResult:any;

  usuario={
    seccion:'',
  }

  generaScan(){
    this.qrCodeString= this.usuario.seccion;
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }

  


}
