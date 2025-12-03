import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverRegisterService {

  private dados = new BehaviorSubject<any>({});

  dados$ = this.dados.asObservable();

  setDados(parcial: any) {
    const atual = this.dados.value;
    this.dados.next({ ...atual, ...parcial });
  }

  getDados() {
    return this.dados.value;
  }

  reset() {
    this.dados.next({});
  }
}
