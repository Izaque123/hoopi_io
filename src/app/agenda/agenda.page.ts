import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel,
  IonButtons, IonIcon, IonButton, IonCard, IonCardHeader,
  IonCardContent
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  searchOutline, notificationsOutline, calendarOutline, callOutline, chatbubblesOutline, 
  checkmarkCircleOutline, menuOutline, locationOutline, flagOutline, alarmOutline,
  navigateOutline, thumbsUpOutline, informationCircleOutline, carOutline,
  cashOutline, cardOutline, phonePortraitOutline, peopleOutline, timeOutline,
  chevronForwardOutline, chevronBackOutline
} from 'ionicons/icons';

interface Trip {
  id: string;
  date: string;
  time: string;
  route: string;
  origin: string;
  destination: string;
  phone: string;
  status: 'Confirmada' | 'Pendente' | 'Cancelada' | 'Em Andamento';
  price: string;
  paymentMethod: 'Dinheiro' | 'Cartão' | 'PIX';
  paymentIcon: string;
  passengerCount: number;
  estimatedTime: string;
  vehicleType: string;
}

interface WeekDate {
  month: string;
  dayNumber: string;
  dayName: string;
  date: string;
  isActive: boolean;
  isToday: boolean;
}

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton, IonLabel,
    IonButtons, IonIcon, IonButton, IonCard, IonCardHeader,
    IonCardContent,
    CommonModule, FormsModule
  ]
})
export class AgendaPage implements OnInit {
  public segmentValue: 'today' | 'next7days' = 'today'; 
  public weekDates: WeekDate[] = [];
  public currentWeekStart: number = 0;
  public selectedDate: string = '';
  
  public allTrips: Trip[] = [
    { 
      id: '1',
      date: this.formatDate(new Date()), 
      time: '08:00',
      route: 'Floriano → Nazaré',
      origin: 'Floriano - Terminal Central',
      destination: 'Nazaré - Estação Principal', 
      phone: '(86) 98765-4321', 
      status: 'Confirmada',
      price: 'R$ 35,00',
      paymentMethod: 'Dinheiro',
      paymentIcon: 'cash-outline',
      passengerCount: 3,
      estimatedTime: '25 min',
      vehicleType: 'Van Executiva'
    },
    { 
      id: '2',
      date: this.formatDate(new Date()), 
      time: '18:00',
      route: 'Nazaré → Floriano',
      origin: 'Nazaré - Centro Comercial',
      destination: 'Floriano - Zona Norte', 
      phone: '(86) 99999-8888', 
      status: 'Confirmada',
      price: 'R$ 35,00',
      paymentMethod: 'Cartão',
      paymentIcon: 'card-outline',
      passengerCount: 2,
      estimatedTime: '30 min',
      vehicleType: 'SUV'
    },
    { 
      id: '3',
      date: this.formatDate(this.addDays(new Date(), 3)), 
      time: '09:30',
      route: 'Floriano → Aeroporto',
      origin: 'Floriano - Hotel Plaza',
      destination: 'Aeroporto Internacional', 
      phone: '(86) 98765-1234', 
      status: 'Pendente',
      price: 'R$ 45,00',
      paymentMethod: 'PIX',
      paymentIcon: 'phone-portrait-outline',
      passengerCount: 4,
      estimatedTime: '45 min',
      vehicleType: 'Van'
    }
  ];

  public filteredTrips: Trip[] = [];

  constructor() {
    addIcons({ 
      searchOutline, notificationsOutline, calendarOutline, callOutline, chatbubblesOutline, 
      checkmarkCircleOutline, menuOutline, locationOutline, flagOutline, alarmOutline,
      navigateOutline, thumbsUpOutline, informationCircleOutline, carOutline,
      cashOutline, cardOutline, phonePortraitOutline, peopleOutline, timeOutline,
      chevronForwardOutline, chevronBackOutline
    });
  }

  ngOnInit() {
    this.generateWeekDates();
    this.filterTrips();
  }

  // Gera apenas 5 dias por vez
  public generateWeekDates() {
    const today = new Date();
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    
    this.weekDates = [];
    
    // Gera apenas 5 dias a partir do currentWeekStart
    for (let i = this.currentWeekStart; i < this.currentWeekStart + 5; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const isToday = this.isToday(date);
      const isActive = i === 0 && this.currentWeekStart === 0; // Primeiro dia ativo por padrão
      
      this.weekDates.push({
        month: months[date.getMonth()],
        dayNumber: date.getDate().toString(),
        dayName: daysOfWeek[date.getDay()],
        date: this.formatDate(date),
        isActive: isActive,
        isToday: isToday
      });
    }
    
    if (this.currentWeekStart === 0) {
      this.selectedDate = this.formatDate(today);
    }
  }

  // Navega para a próxima semana (próximos 5 dias)
  public nextWeek() {
    this.currentWeekStart += 5;
    this.generateWeekDates();
    this.filterTrips();
  }

  // Navega para a semana anterior (5 dias anteriores)
  public prevWeek() {
    if (this.currentWeekStart > 0) {
      this.currentWeekStart -= 5;
      this.generateWeekDates();
      this.filterTrips();
    }
  }

  // Verifica se pode navegar para trás
  public canGoBack(): boolean {
    return this.currentWeekStart > 0;
  }

  private isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }

  public selectDate(dateInfo: WeekDate) {
    this.weekDates.forEach(d => d.isActive = false);
    dateInfo.isActive = true;
    this.selectedDate = dateInfo.date;
    this.filterTrips();
  }

  public filterTrips() {
    if (this.segmentValue === 'today') {
      this.filteredTrips = this.allTrips.filter(
        (trip) => trip.date === this.selectedDate
      );
    } else {
      const startDate = new Date(this.selectedDate);
      const endDate = this.addDays(startDate, 5); // Filtra pelos próximos 5 dias
      
      this.filteredTrips = this.allTrips.filter((trip) => {
        const tripDate = new Date(trip.date);
        const selectedDate = new Date(this.selectedDate);
        return tripDate >= selectedDate && tripDate <= endDate;
      });
    }
  }

  public segmentChanged(event: any) {
    this.segmentValue = event.detail.value;
    this.filterTrips();
  }
  
  public formatDate(date: Date): string {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  public addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  
  public getPrimaryAction(status: Trip['status']): { text: string, color: string, icon: string } {
      switch (status) {
          case 'Confirmada':
              return { text: 'Iniciar', color: 'success', icon: 'navigate-outline' };
          case 'Em Andamento':
              return { text: 'Finalizar', color: 'primary', icon: 'checkmark-circle-outline' };
          case 'Pendente':
              return { text: 'Aceitar', color: 'secondary', icon: 'thumbs-up-outline' };
          default:
              return { text: 'Detalhes', color: 'medium', icon: 'information-circle-outline' };
      }
  }

  public makeCall(phone: string) {
    console.log('Ligando para:', phone);
  }

  public sendMessage(phone: string) {
    console.log('Enviando mensagem para:', phone);
  }

  public handlePrimaryAction(trip: Trip) {
    console.log('Ação principal para viagem:', trip.route);
  }

  // Obtém o texto do período atual
  public getCurrentPeriod(): string {
    if (this.currentWeekStart === 0) {
      return 'Esta Semana';
    } else if (this.currentWeekStart === 5) {
      return 'Próxima Semana';
    } else {
      return `Em ${this.currentWeekStart / 5 + 1} semanas`;
    }
  }
}