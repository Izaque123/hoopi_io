import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import {
  IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote,
  IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  bookOutline, bookSharp, searchOutline, searchSharp, settingsOutline, settingsSharp,
  addOutline, addSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp,
  heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp,
  warningOutline, warningSharp, bookmarkOutline, bookmarkSharp
} from 'ionicons/icons';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AsyncPipe, Location, CommonModule } from '@angular/common';
import { Platform } from '@ionic/angular';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
    AsyncPipe,
    CommonModule
  ],
  standalone: true
})
export class AppComponent implements OnInit {

  public userName$: Observable<string | null>;
  public userRole$: Observable<'passenger' | 'driver' | null>;

  // MENU DO PASSAGEIRO
  public passengerMenu = [
    { title: 'Buscar Viagem', url: '/buscar-viagem', icon: 'search' },
    { title: 'Ajustes da Conta', url: '/settings-passenger', icon: 'settings' },
  ];

  // MENU DO CONDUTOR
  public driverMenu = [
    { title: 'Agenda', url: '/agenda', icon: 'book' },
    { title: 'Criar Viagem', url: '/register-travel', icon: 'add' },
    { title: 'Ajustes da Conta', url: '/settings-driver', icon: 'settings' },
  ];

  public hideMenu$: Observable<boolean>;

  // 🔥 MENU ESCOLHIDO BASEADO NA TELA
  public activeMenu$: Observable<'passenger' | 'driver' | null>;

  private authService = inject(AuthService);

  constructor(
    private router: Router,
    private location: Location,
    private platform: Platform
  ) {

    addIcons({
      bookOutline, bookSharp,
      searchOutline, searchSharp,
      settingsOutline, settingsSharp,
      addOutline, addSharp,
      mailOutline, mailSharp,
      paperPlaneOutline, paperPlaneSharp,
      heartOutline, heartSharp,
      archiveOutline, archiveSharp,
      trashOutline, trashSharp,
      warningOutline, warningSharp,
      bookmarkOutline, bookmarkSharp
    });

    // Botão físico voltar
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.location.back();
    });

    // Esconder menu em telas específicas
    this.hideMenu$ = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event: NavigationEnd) =>
        event.urlAfterRedirects.includes('/login') ||
        event.urlAfterRedirects.includes('/role-selection') ||
        event.urlAfterRedirects.includes('/register-driver') ||
        event.urlAfterRedirects.includes('/register-passenger') ||
        event.urlAfterRedirects.includes('/register-vehicle')
      )
    );

    // Nome do usuário
    this.userName$ = this.authService.user$.pipe(
      map(user => {
        if (!user) return null;
        return user.name || user.email || user.username || null;
      })
    );

    // Tipo de usuário
    this.userRole$ = new Observable(sub => sub.next('driver')); // SIMULAÇÃO

    // 🔥 ESCOLHER MENU BASEADO NA ROTA ATUAL
    this.activeMenu$ = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {

        const url = event.urlAfterRedirects;

        // TELA → MENU DO PASSAGEIRO
        if (
          url.startsWith('/travel-list') ||
          url.startsWith('/settings-passenger')
        ) {
          return 'passenger';
        }

        // TELA → MENU DO CONDUTOR
        if (
          url.startsWith('/agenda') ||
          url.startsWith('/register-travel') ||
          url.startsWith('/settings-driver')
        ) {
          return 'driver';
        }

        // Telas sem menu
        return null;
      })
    );
  }

  ngOnInit(): void { }
}
