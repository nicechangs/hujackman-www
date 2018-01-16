import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { UserComponent } from './user/user.component';

import { RouterModule,Routes } from '@angular/router';
const appRoutes:Routes = [
  { path:'', component:SigninComponent },
  { path:'home', component:HomeComponent, 
    children: [
      {path: 'company', component: CompanyComponent, outlet:'mainrouter'},
      {path: 'user', component: UserComponent, outlet:'mainrouter'},
    ] 
  },

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    HomeComponent,
    CompanyComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
