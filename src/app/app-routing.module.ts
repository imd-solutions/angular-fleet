import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
//Layout
import { ApplicationComponent } from './layout/application/application.component'
import { AuthComponent } from './layout/auth/auth.component'
// Auth Pages
import { LoginComponent } from './pages/auth/login/login.component'
import { RegisterComponent } from './pages/auth/register/register.component'
// App Pages
import { DashboardComponent } from './pages/application/dashboard/dashboard.component'
//Error Pages
import { NotFoundComponent } from './pages/error/not-found/not-found.component'

const routes: Routes = [
  //Site routes goes here
  {
    path: '',
    component: ApplicationComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
    ],
  },

  // App routes goes here here
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  // otherwise redirect to home
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
