import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonHeader, IonButton, IonLabel, IonDatetime, IonTitle, IonInput, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackSharp, cardSharp, personSharp, documentTextSharp, mail, callSharp, lockClosed } from 'ionicons/icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-travel',
  templateUrl: './register-travel.page.html',
  styleUrls: ['./register-travel.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonIcon,  IonTitle, IonButton, IonLabel, IonDatetime, IonInput, IonToolbar, CommonModule, FormsModule]
})
export class RegisterTravelPage implements OnInit {

  origem = '';
  destino = '';
  travelDate= '';
  timeTravel = '';
  price = '';
  numSeat = '';    

  errorMessage = '';
  successMessage = '';

  today: string;

  private router = inject(Router);

  constructor() { 
     addIcons({ arrowBackSharp, cardSharp, personSharp, documentTextSharp, mail, callSharp, lockClosed });
     this.today = new Date().toISOString();
  }

  ngOnInit() {
  }

  async register() {
    this.errorMessage = '';
    this.successMessage = '';

    // Validações básicas
    if (!this.origem || !this.destino || !this.timeTravel || !this.travelDate || !this.price || !this.numSeat ) {
      this.errorMessage = 'Preencha todos os campos.';
      return;
    }


    // Aqui você colocaria a chamada ao back-end
    console.log('Dados para enviar:', {
      fullName: this.destino,
      cpf: this.origem,
      email: this.travelDate,
      gender: this.timeTravel,
      phone: this.price,
      password: this.numSeat
    });

    // Mensagem de sucesso simulada
    this.successMessage = 'Cadastro realizado com sucesso!';
  }

  // No seu componente
  formatCurrency(event: any) {
    let value = event.target.value.replace(/\D/g, '');
    value = (value / 100).toFixed(2);
    value = value.replace('.', ',');
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    event.target.value = `R$ ${value}`;
  }

}
