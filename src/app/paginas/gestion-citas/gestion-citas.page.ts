import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonButton, IonIcon} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { CardFormCitasComponent } from 'src/app/componentes/card-form-citas/card-form-citas.component'

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonHeader, IonToolbar, IonButton, IonIcon, CardFormCitasComponent]
})
export class GestionCitasPage implements OnInit {

  constructor(private rutas: NavController) { }

  irAHome(){
    console.log("ir a home")
    this.rutas.navigateForward('/home')
  }



  ngOnInit() {
  }

}
