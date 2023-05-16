import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { ProjectsComponent } from './componets/projects/projects.component';
import { TasksComponent } from './componets/tasks/tasks.component';


const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'tasks', component: TasksComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
