import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInputPasswordToggle,
  IonIcon
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

import { addIcons } from 'ionicons';
import { personSharp, documentTextSharp, mail, callSharp, lockClosed, } from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './registerPassenger.page.html',
  styleUrls: ['./registerPassenger.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonInputPasswordToggle,
    IonIcon,
    CommonModule,
    FormsModule
  ]
})
export class RegisterPassengerPage implements OnInit {

  // Campos do formulário
  fullName = '';
  cpf = '';
  email = '';
  gender = '';
  phone = '';
  password = '';
  confirmPassword = '';
  
  errorMessage = '';
  successMessage = '';

  private router = inject(Router);

  constructor() {
    // Adiciona ícones utilizados nos inputs
    addIcons({ personSharp, documentTextSharp, mail, callSharp, lockClosed });
  }

  ngOnInit() {}

  async register() {
    this.errorMessage = '';
    this.successMessage = '';

    // Validações básicas
    if (!this.fullName || !this.cpf || !this.email || !this.gender || !this.phone || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Preencha todos os campos.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'As senhas não coincidem.';
      return;
    }

    // Aqui você colocaria a chamada ao back-end
    console.log('Dados para enviar:', {
      fullName: this.fullName,
      cpf: this.cpf,
      email: this.email,
      gender: this.gender,
      phone: this.phone,
      password: this.password
    });

    // Mensagem de sucesso simulada
    this.successMessage = 'Cadastro realizado com sucesso!';
    setTimeout(() => this.router.navigate(['/login']), 2000);
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }


}
