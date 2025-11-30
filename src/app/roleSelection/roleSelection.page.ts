import { Component, inject, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonIcon, IonContent, IonButton, IonInput, IonItem, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { helpCircleOutline } from 'ionicons/icons';
import { InitialHeaderComponent } from '../components/initial-header/initial-header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roleSelection',
  templateUrl: './roleSelection.page.html',
  styleUrls: ['./roleSelection.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, IonHeader, IonTitle, IonToolbar,CommonModule, FormsModule, IonButton, IonInput, IonItem, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, InitialHeaderComponent]
})
export class RoleSelectionPage implements OnInit {
  private router = inject(Router);

  constructor() {
    addIcons({ helpCircleOutline });
   }

  ngOnInit() {
  }
  async ionViewDidEnter() {
    // Fundo claro → ícones pretos
    await StatusBar.setStyle({ style: Style.Light });
  }
  
  goToLogin() {
    this.router.navigate(['/login']);
  }
  goToPassengerRegister() {
    this.router.navigate(['/register-passenger']);
  }
  goToDriverRegister() {
    this.router.navigate(['/register-driver']); 
  }
} 
