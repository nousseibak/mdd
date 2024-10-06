import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from '../components/back-button/back-button.component';
import { NavbarComponent } from '../components/navbar/navbar.component';



@NgModule({
  declarations: [BackButtonComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BackButtonComponent, NavbarComponent]

})
export class SharedModule { }
