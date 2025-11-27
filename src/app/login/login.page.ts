import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonInput, IonItem, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonButton,
    IonInput, IonItem, IonLabel, IonCard, IonCardContent,
    IonCardHeader, IonCardTitle, CommonModule, FormsModule,
    IonCheckbox
  ]
})
export class LoginPage {
  email = '';
  password = '';
  errorMessage = '';
  private router = inject(Router);

  constructor() {}

  async login() {
    this.errorMessage = '';
    if (this.email === 'user@example.com' && this.password === 'password') {
      this.router.navigateByUrl('/folder/inbox', { replaceUrl: true });
    } else {
      this.errorMessage = 'Credenciais inválidas. Tente novamente.';
    }
  }

  register() {
    console.log('Navegar para a tela de registro');
  }

  forgotPassword() {
    console.log('Navegar para a tela de recuperação de senha');

  }
}