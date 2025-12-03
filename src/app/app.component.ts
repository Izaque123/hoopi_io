import { Component, OnInit, inject } from '@angular/core'; // Adicionar OnInit e inject
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AsyncPipe, Location, CommonModule } from '@angular/common';
import { Platform } from '@ionic/angular'; 
import { AuthService } from './services/auth.service'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet, AsyncPipe, CommonModule],
  standalone: true
})
export class AppComponent implements OnInit { 
  public userName$: Observable<string | null>;
  public appPages = [
    { title: 'Agenda', url: '/agenda', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public hideMenu$: Observable<boolean>;
  
  private authService = inject(AuthService);
  constructor(private router: Router, private location: Location, private platform: Platform  ) {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });

    this.platform.backButton.subscribeWithPriority(10, () => {
          this.location.back();
        });


    this.hideMenu$ = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.urlAfterRedirects.includes('/login') || event.urlAfterRedirects.includes('/role-selection' ) || event.urlAfterRedirects.includes('/register-driver') || event.urlAfterRedirects.includes('/register-passenger') || event.urlAfterRedirects.includes('/register-vehicle') ),
    );

    this.userName$ = this.authService.user$.pipe(
      map(user => {
        if (!user) return null;
        return user.name || user.email || user.username || null;
      })
    );
  }

  ngOnInit(): void {

  }
}