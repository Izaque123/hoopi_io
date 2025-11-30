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
import { arrowBackSharp, cardSharp, personSharp, documentTextSharp, mail, callSharp, lockClosed } from 'ionicons/icons';
import { DriverRegisterService } from '../services/register-driver-service';

@Component({
  selector: 'app-register',
  templateUrl: './register-vehicle.page.html',
  styleUrls: ['./register-vehicle.page.scss'],
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
export class RegisterVehiclePage implements OnInit {

  marca = '';
  modelo = '';
  ano = '';
  placa = '';
  cor = '';
  renavam = '';

  errorMessage = '';
  successMessage = '';

  private router = inject(Router);
  private registerService = inject(DriverRegisterService); // <--- AQUI

  driverData: any = null;

  constructor() {
    addIcons({ arrowBackSharp, cardSharp, personSharp, documentTextSharp, mail, callSharp, lockClosed });
  }

  ngOnInit() {
    // Pega dados da primeira etapa
    this.driverData = this.registerService.getDados();

    // Se não tiver nada salvo, volta para a tela anterior
    if (!this.driverData) {
      this.router.navigate(['/register']);
    }
  }

  async register() {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.marca || !this.modelo || !this.ano || !this.placa || !this.cor || !this.renavam) {
      this.errorMessage = 'Preencha todos os campos.';
      return;
    }

    // Unindo dados das duas etapas
    const payloadFinal = {
      ...this.driverData,
      vehicle: {
        marca: this.marca,
        modelo: this.modelo,
        ano: this.ano,
        placa: this.placa,
        cor: this.cor,
        renavam: this.renavam
      }
    };

    console.log("DADOS FINAIS ENVIADOS AO BACKEND: ", payloadFinal);

    // Aqui você chamaria seu backend:
    // await this.http.post('url', payloadFinal).toPromise();

    this.successMessage = 'Cadastro realizado com sucesso!';
    setTimeout(() => this.router.navigate(['/login']), 2000);
  }
  goBack() {
    history.back();
  }
}
