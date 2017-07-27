import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AlertService, AuthenticationService, UserService } from './_services/index';

import { GoModule }  from 'go-module';
import { LibModule }  from 'lib-module';

const appRoutes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    GoModule.forRoot(),
    LibModule.forRoot(),
    RouterModule.forRoot(appRoutes, {useHash: true})
    ],
  declarations: [ 
    AppComponent,
    HeaderComponent, 
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AlertService, AuthenticationService, UserService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


