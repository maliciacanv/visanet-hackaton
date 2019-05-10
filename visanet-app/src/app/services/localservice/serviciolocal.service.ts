import { Injectable } from '@angular/core';

export interface Producto {

}

@Injectable({
  providedIn: 'root'
})
export class ServiciolocalService {

  public arr: Producto[] = [];

  constructor() { }
}
