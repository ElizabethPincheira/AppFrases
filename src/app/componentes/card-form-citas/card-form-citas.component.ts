import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonItem, IonInput } from '@ionic/angular/standalone'

@Component({
  selector: 'app-card-form-citas',
  templateUrl: './card-form-citas.component.html',
  styleUrls: ['./card-form-citas.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonItem, IonInput]
})
export class CardFormCitasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
