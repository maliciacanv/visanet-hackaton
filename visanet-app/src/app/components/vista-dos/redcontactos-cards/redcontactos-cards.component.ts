import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';

@Component({
  selector: 'app-redcontactos-cards',
  templateUrl: './redcontactos-cards.component.html',
  styleUrls: ['./redcontactos-cards.component.sass']
})

export class RedcontactosCardsComponent implements OnInit {
  public colaboradoresCards = [];

  filterCards = '';

  constructor(public colaboradoresService: FirestoreService) { 
    this.colaboradoresService.getColaboradores().subscribe(cards => {
      this.colaboradoresCards = cards;
    })
    
   }

    // this.colaboradoresService.getColaboradores().subscribe(cards => {
    //   this.colaboradoresCards = cards.filter((e:any) => e.profession === 'Arquitecto')
    // })

    // this.colaboradoresService.getColaboradores().subscribe(cards => {
    //   this.colaboradoresCards = cards.filter((e:any) => e.profession === 'Contador')
    // })

    // this.colaboradoresService.getColaboradores().subscribe(cards => {
    //   this.colaboradoresCards = cards.filter((e:any) => e.profession === 'Chef')
    // })

    // this.colaboradoresService.getColaboradores().subscribe(cards => {
    //   this.colaboradoresCards = cards.filter((e:any) => e.experience === '1 año de Experiencia');
    // })

    // this.colaboradoresService.getColaboradores().subscribe(cards => {
    //   this.colaboradoresCards = cards.filter((e:any) => e.experience === '2 años de Experiencia');
    // })

    // this.colaboradoresService.getColaboradores().subscribe(cards => {
    //   this.colaboradoresCards = cards.filter((e:any) => e.experience === '3 años de Experiencia');
    // })

  ngOnInit() {
  }

}
