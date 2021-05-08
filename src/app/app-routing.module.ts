import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component'
import { PrivateTasksComponent} from './components/private-tasks/private-tasks.component'
import { SigninComponent } from './components/signin/signin.component'
import { SignupComponent } from './components/signup/signup.component'
import{AddRaspiComponent} from './components/add-raspi/add-raspi.component'
import{ ProfileComponent } from './components/profile/profile.component'
import{ MyRaspisComponent } from './components/my-raspis/my-raspis.component'
import { MainComponent } from './components/main/main.component'
import { UserexistsComponent} from './components/userexists/userexists.component'
import { WrongpassComponent } from './components/wrongpass/wrongpass.component'
import {AuthGuard} from './auth.guard'
import {UserokComponent} from './components/userok/userok.component'
import {ConfigraspyComponent} from './components/configraspy/configraspy.component'
import { EditbuttonComponent } from './components/editbutton/editbutton.component'

const routes: Routes = [
  {
    path : '',
    redirectTo:'/main',
    pathMatch: 'full'
},
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'private',
    component: PrivateTasksComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'addraspi',
    component: AddRaspiComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path:'myraspis',
    component: MyRaspisComponent
  },
{
  path:'signup/userexists',
  component: UserexistsComponent
},
{
  path:'signin/wrongpass',
  component: WrongpassComponent
},
{
  path:'signup/userok',
  component: UserokComponent
},
{
  path:'private/configraspi',
  component: ConfigraspyComponent
},
{
  path:'private/configraspi/editbutton',
  component: EditbuttonComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
