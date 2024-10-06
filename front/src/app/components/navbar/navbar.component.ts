import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showNavbar = true;
  isLoginPage = false;
  isRegisterPage = false;
  isMenuOpen = false;


  constructor(private router: Router,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login';
        this.isRegisterPage = event.url === '/register';
        // Vérifier si la route active est la page d'accueil
        this.showNavbar = event.url !== '/';
      }
    });
  }

  public $isLogged(): Observable<boolean> {
    return this.sessionService.$isLogged();
  }



  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


}
