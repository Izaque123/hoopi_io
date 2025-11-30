import { Component, OnInit } from '@angular/core';
import { IonIcon,  IonHeader,IonToolbar, IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-initial-header',
  templateUrl: './initial-header.component.html',
  styleUrls: ['./initial-header.component.scss'],
  standalone: true,
  imports: [IonIcon,  IonHeader,IonToolbar, InitialHeaderComponent, IonContent]
})
export class InitialHeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
