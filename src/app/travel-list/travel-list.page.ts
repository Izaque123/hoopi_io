import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonList, 
  IonItem, IonLabel, IonIcon, IonAvatar, IonButton, IonCard, IonCardContent, IonButtons
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  locationOutline, searchOutline, heart, arrowForward, navigateCircleOutline 
} from 'ionicons/icons';

// Estrutura de dados para as listas
interface Place {
  name: string;
  location: string;
  distance: string;
  imageUrl: string;
  isPopular: boolean;
}

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.page.html',
  styleUrls: ['./travel-list.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonList, 
    IonItem, IonLabel, IonIcon, IonAvatar, IonButton, IonCard, IonCardContent, 
    IonButtons,
    CommonModule, FormsModule
  ],
})
export class TravelListPage implements OnInit {

  public location: string = 'Floriano, Piauí';
  public popularPlaces: Place[] = [];
  public nearestPlaces: Place[] = [];
  public searchTerm: string = '';

  constructor() {
    addIcons({ locationOutline, searchOutline, heart, arrowForward, navigateCircleOutline });
  }

  ngOnInit() {
    this.loadData();
  }

loadData() {
    // Dados simulados para o Piauí
    const allPlaces: Place[] = [
      { 
        name: 'Rota Teresina', 
        location: 'Floriano → Teresina', 
        distance: '240 Km', 
        imageUrl: 'assets/images/teresina.jpeg', 
        isPopular: true 
      },
      { 
        name: 'Rota Parnaíba', 
        location: 'Teresina → Parnaíba', 
        distance: '340 Km', 
        imageUrl: 'assets/images/parnaiba.jpg', 
        isPopular: true 
      },
      { 
        name: 'São Raimundo Nonato', 
        location: 'São Raimundo Nonato, PI', 
        distance: '15.0 Km', 
        imageUrl: 'assets/images/srn.jpeg', 
        isPopular: false 
      },
      { 
        name: 'Picos', 
        location: 'Picos, PI', 
        distance: '5.2 Km', 
        imageUrl: 'assets/images/picos.jpeg', 
        isPopular: false 
      },
    ];

    this.popularPlaces = allPlaces.filter(p => p.isPopular);
    this.nearestPlaces = allPlaces.filter(p => !p.isPopular);
  }

  onSearch() {
    console.log('Buscando por:', this.searchTerm);
  }

  goToRoute(placeName: string) {
    console.log(`Navegando para rota: ${placeName}`);
  }

  seeAll(section: string) {
    console.log(`Ver Todos clicado para ${section}`);
  }
}

