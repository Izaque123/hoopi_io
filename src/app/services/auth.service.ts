import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, tap, BehaviorSubject } from 'rxjs';

interface User {
  id: number;
  email: string;
  name?: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = environment.apiUrl;
  private TOKEN_KEY = 'auth_token';

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable(); 

  constructor(private http: HttpClient) { 
    if (this.isAuthenticated()) {
      this.loadUserOnAppStart();
    }
  }

  loadUser(): Observable<User> {
    return this.http.get<User>(this.API_URL + 'me/').pipe(
      tap(user => {
        this.userSubject.next(user); 
      })
    );
  }

  private loadUserOnAppStart() {
    this.loadUser().subscribe({
      error: (err) => {
        console.error('Falha ao carregar usuário, limpando token:', err);
        this.logout();
      }
    });
  }

  login(credentials: any): Observable<any> {
    return this.http.post(this.API_URL + 'api/login/', credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem(this.TOKEN_KEY, response.token);
          this.loadUser().subscribe();
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }


  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.userSubject.next(null);
  }
}