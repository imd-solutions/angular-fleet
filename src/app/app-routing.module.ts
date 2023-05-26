import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
//Layout
import { ApplicationComponent } from './layout/application/application.component'
import { AuthComponent } from './layout/auth/auth.component'
// Guards
import { LoggedInGuard } from './middleware/LoggedIn/logged-in.guard'
import { NotLoggedInGuard } from './middleware/NotLoggedIn/not-logged-in.guard'
// Auth Pages
import { LoginComponent } from './pages/auth/login/login.component'
import { RegisterComponent } from './pages/auth/register/register.component'
import { ForgottenPasswordComponent } from './pages/auth/forgotten-password/forgotten-password.component'
// App Pages
import { DashboardComponent } from './pages/application/dashboard/dashboard.component'
//Error Pages
import { NotFoundComponent } from './pages/error/not-found/not-found.component'

const routes: Routes = [
  //Site routes goes here
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  // Auth routes goes here here
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [NotLoggedInGuard],
    children: [
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'forgotten-password', component: ForgottenPasswordComponent },
    ],
  },
  // Application routes goes here here
  {
    path: 'application',
    component: ApplicationComponent,
    canActivate: [LoggedInGuard],
    children: [{ path: 'dashboard', component: DashboardComponent }],
  },
  // otherwise redirect to home
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
