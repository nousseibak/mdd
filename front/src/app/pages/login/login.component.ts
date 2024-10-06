import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginRequest } from '../../interfaces/auth/loginRequest.interface';
import { SessionInformation } from '../../interfaces/auth/sessionInformation.interface';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  hide = true;
  onError = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const loginRequest: LoginRequest = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.authService.login(loginRequest).subscribe({
      next: (response: SessionInformation) => {
        this.sessionService.logIn(response);
        this.router.navigate(['/feedPost']);
      },
      error: () => {
        this.onError = true;
      }
    });
  }
}
