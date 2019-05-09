import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';
@Component({
  selector: 'app-comparar-prestamos',
  templateUrl: './comparar-prestamos.component.html',
  styleUrls: ['./comparar-prestamos.component.sass']
})

export class CompararPrestamosComponent implements OnInit {
  public entidades = [];

  cantidadInicial: number = 10000;
  cantidadMes: number = 12;
  intereses: number;
  cuotaMensual: number;
  montoTotal: number;



  constructor(public entidadesService: FirestoreService) { 
    this.entidadesService.getEntidades().subscribe(bancos => {
      this.entidades = bancos;
    })
   }

  busqueda(data){
    console.log(data);
  }  

  sumarCantidad(){
    const cantInit = this.cantidadInicial;
    this.cantidadInicial = cantInit + 500;
  }

  restarCantidad(){
    const cantInit = this.cantidadInicial;
    this.cantidadInicial = cantInit - 500;
  }
  
  cantidadMeses(valor: number){
    this.cantidadMes = valor;
  }

  

  ngOnInit() {
  }

}
