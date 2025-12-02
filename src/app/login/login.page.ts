// hoopi_io/src/app/login/login.page.ts
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonButton, 
  IonInput, IonItem, IonLabel, 
  IonCard, IonCardContent, 
  IonCardHeader, IonCardTitle, 
  IonCheckbox, IonInputPasswordToggle, IonIcon, 
  IonToast, 
  AlertController, LoadingController
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonButton, 
    IonInput, IonItem, IonLabel, IonCard, IonCardContent, 
    IonCardHeader, IonCardTitle, IonCheckbox, CommonModule, FormsModule,
    IonInputPasswordToggle, IonIcon, IonToast,
  ]
})

export class LoginPage implements OnInit {
  credentials = {
    email: '', 
    password: '',
  };

  errorMessage: string | null = null; 

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
    }
  }

  async login() {
  this.errorMessage = null; 
    const loading = await this.loadingController.create({
      message: 'Entrando...'
    });
    await loading.present();

    this.authService.login(this.credentials).subscribe({
      next: () => {
        loading.dismiss();
        
        this.router.navigateByUrl('/agenda', { replaceUrl: true }); 
        
        console.log('Login bem-sucedido! Redirecionando para /agenda');
      },
      error: async (err) => {
        loading.dismiss();
        
        // 4. CORREÇÃO: Definir a mensagem de erro para o template
        // Você pode remover o AlertController se preferir exibir apenas no template.
        this.errorMessage = 'Usuário ou senha inválidos. Por favor, tente novamente.'; 

        const alert = await this.alertController.create({
          header: 'Erro de Login',
          message: this.errorMessage,
          buttons: ['OK'],
        });
        await alert.present();
        
        console.error('Erro de login:', err);
      }
    });
  }
}