import { Component, OnInit } from '@angular/core';
import { IonToggle, IonItem, IonLabel} from '@ionic/angular/standalone'

@Component({
  selector: 'app-eliminar-citas',
  templateUrl: './eliminar-citas.component.html',
  styleUrls: ['./eliminar-citas.component.scss'],
  standalone:true,
  imports:[IonToggle, IonItem, IonLabel]
})
export class EliminarCitasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
