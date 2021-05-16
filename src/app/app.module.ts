import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from "@angular/forms";
import {AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { ProfileComponent } from './components/profile/profile.component';
import { AddRaspiComponent } from './components/add-raspi/add-raspi.component';
import { MyRaspisComponent } from './components/my-raspis/my-raspis.component';
import { WrongpassComponent } from './components/wrongpass/wrongpass.component';
import { UserexistsComponent } from './components/userexists/userexists.component';
import { UserokComponent } from './components/userok/userok.component';
import { ConfigraspyComponent } from './components/configraspy/configraspy.component';
import { EditbuttonComponent } from './components/editbutton/editbutton.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { ChangepasswordokComponent } from './components/changepasswordok/changepasswordok.component';
import { ChangepasswordfailComponent } from './components/changepasswordfail/changepasswordfail.component';
import { RaspiaddedokComponent } from './components/raspiaddedok/raspiaddedok.component';
import { RaspiaddedfailComponent } from './components/raspiaddedfail/raspiaddedfail.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    TasksComponent,
    PrivateTasksComponent,
    MainComponent,
    ProfileComponent,
    AddRaspiComponent,
    MyRaspisComponent,
    WrongpassComponent,
    UserexistsComponent,
    UserokComponent,
    ConfigraspyComponent,
    EditbuttonComponent,
    ChangepasswordComponent,
    ChangepasswordokComponent,
    ChangepasswordfailComponent,
    RaspiaddedokComponent,
    RaspiaddedfailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
  
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
