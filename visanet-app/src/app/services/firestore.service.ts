import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  collectionColaboradoresFb: Observable<Colaboradores[]>;
  collectionEntidadesFb: Observable<Entidades[]>;

  constructor(public colaboradores: AngularFirestore, public entidades: AngularFirestore) { }

  getColaboradores() {
    return this.collectionColaboradoresFb = this.colaboradores.collection('colaboradores').valueChanges()
  }

  getEntidades() {
    return this.collectionEntidadesFb = this.entidades.collection('entidades').valueChanges()
  }
}

export interface Colaboradores{
  name?: string;
  lastname?: string;
  profession?: string;
  experience?: string;
  nearness?: string;
  img?: string;
}

export interface Entidades{
  TCEA?: number;
  img?: string;
  nombre?: string
}