import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionInformation } from '../interfaces/auth/sessionInformation.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public isLogged = false;
  public sessionInformation: SessionInformation | undefined;

  private isLoggedSubject = new BehaviorSubject<boolean>(this.isLogged);

  constructor() {
    this.checkToken(); // Vérifie l'état du token lors de l'initialisation
  }

  public $isLogged(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }

  public logIn(user: SessionInformation): void {
    this.sessionInformation = user;
    this.isLogged = true;
    this.next();
    localStorage.setItem("token", this.sessionInformation.token);
    localStorage.setItem('sessionInformation', JSON.stringify(this.sessionInformation));
  }

  public logOut(): void {
    this.sessionInformation = undefined;
    this.isLogged = false;
    this.next();
    localStorage.removeItem('token'); // Supprime le token
    localStorage.removeItem('sessionInformation'); // Supprime les informations de session
  }

  private next(): void {
    this.isLoggedSubject.next(this.isLogged);
  }

  private checkToken(): void {
    const token = localStorage.getItem('token');
    const sessionInfo = localStorage.getItem('sessionInformation');

    if (token && sessionInfo && !this.isTokenExpired(token)) {
      this.isLogged = true;
      this.sessionInformation = JSON.parse(sessionInfo); // Récupère `sessionInformation` à partir du JSON
      this.next();
    } else {
      this.logOut(); // Déconnecte l'utilisateur si le token est expiré
    }
  }

  private isTokenExpired(token: string): boolean {
    try {
      const decodedToken: any = jwtDecode(token);
      const expiry = decodedToken.exp;
      const now = Math.floor(Date.now() / 1000); // Heure actuelle en secondes
      return expiry < now;
    } catch (e) {
      console.error("Erreur lors de la vérification du token : ", e);
      return true;
    }
  }
}
