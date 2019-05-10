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

  ngOnInit() {
  }

}
