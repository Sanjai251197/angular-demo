import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  exports: [LoginComponent, SignUpComponent],
  imports: [CommonModule, FormsModule],
})
export class AccountsModule {}