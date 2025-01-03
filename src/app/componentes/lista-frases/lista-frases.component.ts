import { Component, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonIcon } from '@ionic/angular/standalone'

@Component({
  selector: 'app-lista-frases',
  templateUrl: './lista-frases.component.html',
  styleUrls: ['./lista-frases.component.scss'],
  standalone: true,
  imports: [ IonItem, IonLabel, IonIcon]
})
export class ListaFrasesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
