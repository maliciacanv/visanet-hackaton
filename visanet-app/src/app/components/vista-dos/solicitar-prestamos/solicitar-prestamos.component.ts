import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitar-prestamos',
  templateUrl: './solicitar-prestamos.component.html',
  styleUrls: ['./solicitar-prestamos.component.sass']
})
export class SolicitarPrestamosComponent implements OnInit {

  entidadNumber: any;

  constructor() { }

  valorEntidad(valor: number){
    this.entidadNumber = '{'+ valor +'}';
  }

  ngOnInit() {
  }

}
