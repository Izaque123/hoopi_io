import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonInput, 
  IonLabel 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  arrowBackOutline,
  notificationsOutline
} from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-passenger',
  templateUrl: './settings-passenger.page.html',
  styleUrls: ['./settings-passenger.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonInput,
    IonLabel,
    CommonModule,
    FormsModule
  ]
})
export class SettingsPassengerPage implements OnInit {
  // Informações do usuário
  user = {
    email: '',
    phone: '',
    state: '',
    city: ''
  };

  errorMessage = '';
  successMessage = '';

  constructor(private router: Router) {
    addIcons({
      arrowBackOutline,
      notificationsOutline
    });
  }

  ngOnInit() {
    this.loadUserData();
  }

  // Carrega os dados do usuário
  loadUserData() {
    // Em uma aplicação real, isso viria de uma API
    this.user = {
      email: 'passageiro@email.com',
      phone: '(11) 98765-4321',
      state: 'São Paulo',
      city: 'São Paulo'
    };
  }

  // Voltar para a página anterior
  goBack() {
    this.router.navigate(['/home']);
  }

  // Atualizar perfil
  async updateProfile() {
    this.errorMessage = '';
    this.successMessage = '';

    // Validações básicas
    if (!this.user.email || !this.user.phone || !this.user.state || !this.user.city) {
      this.errorMessage = 'Preencha todos os campos.';
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.user.email)) {
      this.errorMessage = 'Informe um email válido.';
      return;
    }

    // Aqui você colocaria a chamada ao back-end para atualizar os dados
    console.log('Dados do usuário para atualizar:', this.user);

    // Simulação de atualização bem-sucedida
    this.successMessage = 'Informações atualizadas com sucesso!';
    
    // Limpa a mensagem de sucesso após 5 segundos
    setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }
}