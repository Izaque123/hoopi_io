import { Component, inject, OnInit } from '@angular/core'; // Adiciona OnInit
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonInput, IonItem, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonInputPasswordToggle, IonIcon} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

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
    IonInputPasswordToggle, IonIcon
  ]
})

export class LoginPage implements OnInit { // Implementa OnInit
  email = '';
  password = '';
  errorMessage = '';
  formVisible = false; // Estado para controlar a visibilidade do formulário
  private router = inject(Router);

  constructor() {
    addIcons({ eye, lockClosed });
  }

  ngOnInit() {
    // Inicia a animação após um pequeno delay para carregar a página
    setTimeout(() => {
      this.formVisible = true;
    }, 500); // 500ms de atraso antes de iniciar a transição
  }

  async login() {
    this.errorMessage = '';
    // ... (lógica de login como antes) ...

    // Simulação de login bem-sucedido:
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
    this.router.navigate(['/register-travel']);
  }
  choseRole() {
    this.router.navigate(['/role-selection']);
  }

}