import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from '../components/back-button/back-button.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BackButtonComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule 
  ],
  exports: [BackButtonComponent, NavbarComponent]

})
export class SharedModule { }
