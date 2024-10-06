import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  showNavbar = true; // Contrôle l'affichage de la navbar

  constructor(private router: Router, private sessionService: SessionService) {
    // Écoutez les événements de navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Vérifiez si l'URL correspond aux pages de connexion ou d'enregistrement
        const isLoginOrRegisterPage = event.url === '/login' || event.url === '/register'|| event.url === '/';
        this.showNavbar = !isLoginOrRegisterPage; // Masquez la navbar sur ces pages
      }
    });
  }

  public $isLogged(): Observable<boolean> {
    return this.sessionService.$isLogged();
  }
}
