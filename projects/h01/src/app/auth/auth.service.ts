import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(roleName: string) {
    return this.http.get<any[]>(`${this.apiUrl}/roles?name=${roleName}`).toPromise()
      .then(roles => {
        if (roles.length) {
          const role = roles[0];
          const token = this.generateToken(role);
          return { token };
        }
        throw new Error('Ruolo non valido');
      });
  }

  private generateToken(role: any) {
    // deprecated btoa //const token = `Bearer ${btoa(JSON.stringify({
    const token = `Bearer ${window.atob(JSON.stringify({
      sub: role.id,
      name: role.name,
      roles: [role.name]
    }))}`;

    this.saveToken(token);

    return token;
  }

  private saveToken(token: string) {
    const tokens = JSON.parse(localStorage.getItem('tokens') || '[]');
    tokens.push(token);
    localStorage.setItem('tokens', JSON.stringify(tokens));
  }

  isAuthenticated(): boolean {
    const tokens = JSON.parse(localStorage.getItem('tokens') || '[]');
    return tokens.some((token: string) => {
      const payload = JSON.parse(window.atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    });
  }

  isAuthorized(roles: string[]): boolean {
    const tokens = JSON.parse(localStorage.getItem('tokens') || '[]');
    const token = tokens.find((t: string) => {
      const payload = JSON.parse(window.atob(t.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    });
    if (token) {
      const payload = JSON.parse(window.atob(token.split('.')[1]));
      return roles.some((r: string) => payload.roles.includes(r));
    }
    return false;
  }
}
