import { Component, OnInit } from '@angular/core';
import{ IonCard, IonCardContent, IonCardHeader, IonCardSubtitle } from '@ionic/angular/standalone'
@Component({
  selector: 'app-frase-home',
  templateUrl: './frase-home.component.html',
  styleUrls: ['./frase-home.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle],

})
export class FraseHomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
