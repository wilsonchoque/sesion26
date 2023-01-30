import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    LoginComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],exports: [
    HomeComponent,
    UsersComponent,
    LoginComponent,
    DetalleComponent
  ],
})
export class PagesModule { }
