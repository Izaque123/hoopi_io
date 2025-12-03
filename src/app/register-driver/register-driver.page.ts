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
import { DriverRegisterService } from '../services/register-driver-service';

import { addIcons } from 'ionicons';
import { cardSharp, personSharp, documentTextSharp, mail, callSharp, lockClosed } from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register-driver.page.html',
  styleUrls: ['./register-driver.page.scss'],
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
export class RegisterDriverPage implements OnInit {

  fullName = '';
  cpf = '';
  cnh = '';
  email = '';
  gender = '';
  phone = '';
  password = '';
  confirmPassword = '';

  errorMessage = '';
  successMessage = '';

  private router = inject(Router);
  private registerService = inject(DriverRegisterService);  // <-- AQUI

  constructor() {
    addIcons({ cardSharp, personSharp, documentTextSharp, mail, callSharp, lockClosed });
  }

  ngOnInit() {}

  registerVehicle() {

    this.errorMessage = '';

    if (!this.fullName || !this.cpf || !this.cnh || !this.email || !this.gender || !this.phone || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Preencha todos os campos.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'As senhas não coincidem.';
      return;
    }

    this.registerService.setDados({
      fullName: this.fullName,
      cpf: this.cpf,
      cnh: this.cnh,
      email: this.email,
      gender: this.gender,
      phone: this.phone,
      password: this.password
    });

    this.router.navigate(['/register-vehicle']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
