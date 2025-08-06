// core/auth.service.ts
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../../enviroments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'token';
  private apiUrl = environment.apiBaseUrl + '/auth';

  isLoggedIn = signal(!!localStorage.getItem(this.tokenKey));

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    const body = { username, password };

    return this.http.post<{ token: string }>(this.apiUrl + '/login', body).pipe(
      tap(response => {
        localStorage.setItem(this.tokenKey, response.token);
        this.isLoggedIn.set(true);
      }),
      catchError(error => {
        console.error('Error en login', error);
        return of(null);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedIn.set(false);
    this.router.navigateByUrl('/login');
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  register(username: string, password: string, email: string) {
    const body = { username, password, email };

    return this.http.post<{ message: string }>(this.apiUrl + '/register', body).pipe(
      tap(response => {
        console.log('Registro exitoso:', response);
      }),
      catchError(error => {
        console.error('Error en el registro:', error);
        return of(null); // Manejo de error básico
      })
    );
  }
}
