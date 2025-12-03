import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonIcon, 
  IonHeader, 
  IonButtons, 
  IonButton,
  IonLabel, 
  IonTitle, 
  IonInput, 
  IonToolbar 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  searchOutline, 
  notificationsOutline,
  menuOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-settings-driver',
  templateUrl: './settings-driver.page.html',
  styleUrls: ['./settings-driver.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonIcon, 
    IonButtons, 
    IonTitle, 
    IonButton, 
    IonLabel, 
    IonInput, 
    IonToolbar, 
    CommonModule, 
    FormsModule
  ]
})
export class SettingsDriverPage implements OnInit {
  // Informações do usuário
  user = {
    email: '',
    phone: '',
    state: '',
    city: ''
  };

  // Informações do veículo
  vehicle = {
    brand: '',
    model: '',
    color: '',
    year: '',
    plate: ''
  };

  errorMessage = '';
  successMessage = '';

  constructor() {
    addIcons({
      searchOutline, 
      menuOutline, 
      notificationsOutline
    });
  }

  ngOnInit() {
    // Aqui você poderia carregar os dados atuais do usuário de um serviço/API
    this.loadUserData();
  }

  // Simula o carregamento dos dados do usuário
  loadUserData() {
    // Em uma aplicação real, isso viria de uma API
    this.user = {
      email: 'usuario@exemplo.com',
      phone: '(11) 99999-9999',
      state: 'São Paulo',
      city: 'São Paulo'
    };

    this.vehicle = {
      brand: 'Volkswagen',
      model: 'Golf',
      color: 'Preto',
      year: '2020',
      plate: 'ABC-1234'
    };
  }

  async updateAccount() {
    this.errorMessage = '';
    this.successMessage = '';

    // Validações básicas
    if (!this.user.email || !this.user.phone || !this.user.state || !this.user.city) {
      this.errorMessage = 'Preencha todas as informações pessoais.';
      return;
    }

    if (!this.vehicle.brand || !this.vehicle.model || !this.vehicle.color || !this.vehicle.year || !this.vehicle.plate) {
      this.errorMessage = 'Preencha todas as informações do veículo.';
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
    console.log('Dados do veículo para atualizar:', this.vehicle);

    // Simulação de atualização bem-sucedida
    this.successMessage = 'Informações atualizadas com sucesso!';
    
    // Limpa a mensagem de sucesso após 5 segundos
    setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }
}