import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonButton, IonIcon } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonHeader, IonToolbar, IonButton, IonIcon]
})
export class ConfiguracionesPage implements OnInit {

  constructor(private rutas: NavController) { }

  irAHome(){
    console.log("ir a home")
    this.rutas.navigateForward('/home')
  }

  ngOnInit() {
  }

}
