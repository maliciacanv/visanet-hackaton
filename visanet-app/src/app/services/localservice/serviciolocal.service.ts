import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciolocalService {

  public enviarDataStep4 = new BehaviorSubject(0);

  recibirDataStep4 = this.enviarDataStep4.asObservable();

  constructor() { }

  datarecibidaStep4(obj){
    this.enviarDataStep4.next(obj)
  
  }
}
