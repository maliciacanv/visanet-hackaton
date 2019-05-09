import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcula-prestamo',
  templateUrl: './calcula-prestamo.component.html',
  styleUrls: ['./calcula-prestamo.component.sass']
})
export class CalculaPrestamoComponent implements OnInit {
  cantidadInicializada: number = 10000;
  valor:number = 12;
  cuota: number;
  TCEA:number = 12;
  montoTotalAPagar: number;
  interes: number;

  constructor() { }

  masCantidad(){
    const cantInit = this.cantidadInicializada;
    this.cantidadInicializada = cantInit + 500;
    this.cambiarValor();
   }  
  menosCantidad(){
      const cantInit = this.cantidadInicializada;
      this.cantidadInicializada = cantInit - 500;
      this.cambiarValor();
    }
  numeroMeses(valor){
    this.valor = valor;
    this.cambiarValor();
  }  
    
  cambiarValor(){
    this.interes = (this.cantidadInicializada*this.TCEA)/100;
    this.montoTotalAPagar = this.cantidadInicializada + this.interes;
    this.cuota = this.montoTotalAPagar/this.valor;
  }
  ngOnInit() {
  }

}
