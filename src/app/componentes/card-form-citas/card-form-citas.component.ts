import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonItem, IonInput, IonButton } from '@ionic/angular/standalone'
import { FormsModule } from '@angular/forms'; // Importa FormsModule




@Component({
  selector: 'app-card-form-citas',
  templateUrl: './card-form-citas.component.html',
  styleUrls: ['./card-form-citas.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonItem, IonInput, IonButton,FormsModule]
})
export class CardFormCitasComponent  implements OnInit {

  constructor() { }

// variables
ingresaCita : String = '' 
ingresaAutor : String = '' 

  agregar(){
    const var1:String= this.ingresaCita
    const var2:String= this.ingresaAutor

    console.log(var1)
    console.log(var2)
    console.log("agregar frase a la lista")
  }

  ngOnInit() {}

}
