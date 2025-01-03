import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonItem, IonInput, IonButton} from '@ionic/angular/standalone'
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';






@Component({
  selector: 'app-card-form-citas',
  templateUrl: './card-form-citas.component.html',
  styleUrls: ['./card-form-citas.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonItem, IonInput, IonButton,FormsModule, CommonModule]
})
export class CardFormCitasComponent  implements OnInit {

  constructor() { }

// variables
ingresaCita : String = '' 
ingresaAutor : String = '' 

mensajeFrase : boolean = false
mensajeAutor : boolean = false

// VALIDACIONES
// 1-Asegúrese de que tanto el campo para la frase como el campo del autor sean obligatorios.
// 2-Establezca una validación para que el campo de la frase tenga al menos 5 caracteres. 
// El formulario debe indicar un error si la longitud de la frase es inferior a este requisito.
// 3-Implemente una validación que requiera que el campo del autor tenga un mínimo de 2 caracteres. 
// El formulario debe señalar un error si la longitud del nombre del autor es menor a esta cantidad.
  

  agregar(){

    if((this.ingresaCita.length)<5){
      console.log("El campo Frase deben tener al menos 5 caracteres")
      this.mensajeFrase = true
    }

    if((this.ingresaAutor.length)<2){
      console.log("El campo Autor deben tener al menos 2 caracteres")
      this.mensajeAutor = true
    }

    localStorage.setItem("Cita", this.ingresaCita + "");
    localStorage.setItem("Autor", this.ingresaAutor +"");


    // let cita:String=this.ingresaCitaLocalSt
    // let autor:String=this.ingresaAutorLocalSt
    
    console.log(this.ingresaCita)
    console.log(this.ingresaAutor)
    console.log("agregar frase a la lista")
  }

  ngOnInit() {}

}
