import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SessionService } from "../services/session.service";

@Injectable({ providedIn: 'root' })
export class JwtInterceptor implements HttpInterceptor {
  constructor(private sessionService: SessionService) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem("token");
    console.log("this.sessionService.isLogged: "+this.sessionService.isLogged)
    console.log("localStorage : "+localStorage.getItem("token"));
    if (this.sessionService.isLogged) {
      console.log("this.sessionService.isLogged: "+this.sessionService.isLogged)
      console.log("token logged: "+token)
      console.log("localStorage : "+localStorage.getItem("token"));
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.sessionService.sessionInformation!.token}`,
          //'Content-Type': 'application/json',
          //'Access-Control-Allow-Origin': 'http://localhost:4200',
          //'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          //'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization'
        }
      });
    }
    return next.handle(request);
  }
}