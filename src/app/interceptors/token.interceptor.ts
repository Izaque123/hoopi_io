import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

/**
 * Interceptor para anexar o token de autenticação em requisições protegidas.
 */
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  // Verifica se a requisição não é para o endpoint de login (para evitar loop)
  // E se um token existe
  const isLoginRequest = req.url.includes('/login/'); // Ou o nome do seu endpoint de login

  if (token && !isLoginRequest) {
    // Clona a requisição e adiciona o cabeçalho 'Authorization'
    // O DRF por padrão espera o formato "Token <seu_token>"
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', `Token ${token}`)
    });
    return next(clonedReq);
  }

  // Se não houver token ou for a requisição de login, segue com a requisição original
  return next(req);
};