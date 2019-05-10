import { Component, OnInit } from '@angular/core';
import { ServiciolocalService } from '../../../services/localservice/serviciolocal.service';

@Component({
  selector: 'app-solicitar-prestamos',
  templateUrl: './solicitar-prestamos.component.html',
  styleUrls: ['./solicitar-prestamos.component.sass']
})
export class SolicitarPrestamosComponent implements OnInit {

  entidadNumber: any;
  newDataStep: any[] = [];

  constructor(public servicioLocalStep: ServiciolocalService) {
    this.servicioLocalStep.recibirDataStep4.subscribe((obj:any) => {
    this.newDataStep = obj;
    console.log(this.newDataStep)


    })


   }

  valorEntidad(valor: number){
    this.entidadNumber = '{'+ valor +'}';
  }



  ngOnInit() {
  }

}
