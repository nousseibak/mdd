import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from './shared-module.module';



@NgModule({
  declarations: [RegisterComponent,
    LoginComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule

  ]
})
export class AuthModule { }
