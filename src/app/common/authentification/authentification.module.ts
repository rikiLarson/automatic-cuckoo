import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [AuthLoginComponent],
  providers:[AuthService],
  exports:[AuthLoginComponent]
})
export class AuthentificationModule { }
