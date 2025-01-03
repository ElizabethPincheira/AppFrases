import { Component } from '@angular/core';
import { IonContent, IonButton, IonHeader, IonToolbar, IonIcon, IonFab,
  IonFabButton, 
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { FraseHomeComponent } from 'src/app/componentes/frase-home/frase-home.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonContent, IonButton, IonHeader, IonToolbar, IonIcon, IonFab, IonFabButton, FraseHomeComponent],
})
export class HomePage {
  constructor(private rutas: NavController) {}

  irAGestionCitas(){
    console.log("ir a citas")
    this.rutas.navigateForward('/gestion-citas')
  }

  irAConfiguraciones(){
    console.log("ir a configuraciones")
    this.rutas.navigateForward('configuraciones')
  }
  
}
