import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';
import { ServiciolocalService } from '../../../services/localservice/serviciolocal.service';
@Component({
  selector: 'app-comparar-prestamos',
  templateUrl: './comparar-prestamos.component.html',
  styleUrls: ['./comparar-prestamos.component.sass']
})

export class CompararPrestamosComponent implements OnInit {
  public entidades: any = [];

  cantidadInicial: number = 10000;
  cantidadMes: number = 12;
  intereses: any;
  cuotaMensual: number;
  montoTotal: number;
  tcaData:number;

  filterBank = '';

  constructor(public entidadesService: FirestoreService, public servicioLocal: ServiciolocalService) { 
    this.entidadesService.getEntidades().subscribe(bancos => {
      this.entidades = bancos;
    })
  }

  sumarCantidad(){
    const cantInit = this.cantidadInicial;
    this.cantidadInicial = cantInit + 500;
    this.calculoValores()
  }

  restarCantidad(){
    const cantInit = this.cantidadInicial;
    this.cantidadInicial = cantInit - 500;
    this.calculoValores()
  }
  
  cantidadMeses(valor: number){
    this.cantidadMes = valor;
    this.calculoValores()
  }

  calculoValores(){
    this.entidades = this.entidades.map((ele: any) => {
      const newObj = {
        ...ele,
        interesesObj: (ele.TCEA * this.cantidadInicial)/100,
        montoTotalObj: this.cantidadInicial + (ele.TCEA * this.cantidadInicial)/100,
        cuotaObj: (this.cantidadInicial + (ele.TCEA * this.cantidadInicial)/100)/this.cantidadMes
      }
      return newObj;
    });
  }

  busqueda(data: string){
    let search: any;
    search = this.entidades.filter((ele: any) => ele.nombre === data)
    console.log(search)
    return this.entidades.push(search)
  }  

  enviarDataStep4(banco:any, cantidad: any){
    const obj = {
      ...banco,
      cantidadIni: cantidad
    }
    this.servicioLocal.datarecibidaStep4(obj);
  }

  ngOnInit() {}

}
