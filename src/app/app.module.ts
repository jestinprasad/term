import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserviewComponent } from './userview/userview.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { UsereditComponent } from './useredit/useredit.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { NewbooksComponent } from './newbooks/newbooks.component';
import { BooksviewComponent } from './booksview/booksview.component';
import { ValidationService } from './validation.service';

const routes : Routes = [
  {
    path : '',
    component: UserviewComponent,
    pathMatch : "full"
  },
  {
    path : 'view',
    component: UserviewComponent
  },
  {
    path : 'register',
    component: RegistrationComponent
  },
  {
    path : 'edit/:id',
    component: UsereditComponent
  },
  {
    path : '**',
    redirectTo: "register"
  }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserviewComponent,
    AdminviewComponent,
    UsereditComponent,
    AdmineditComponent,
    NewbooksComponent,
    BooksviewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService,ValidationService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
