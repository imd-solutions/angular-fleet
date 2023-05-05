import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/partials/header/header.component'
import { FooterComponent } from './components/partials/footer/footer.component'
import { SidebarComponent } from './components/partials/sidebar/sidebar.component'
import { ApplicationComponent } from './layout/application/application.component'
import { AuthComponent } from './layout/auth/auth.component'
import { LoginComponent } from './pages/auth/login/login.component'
import { RegisterComponent } from './pages/auth/register/register.component'
import { DashboardComponent } from './pages/application/dashboard/dashboard.component'
import { NotFoundComponent } from './pages/error/not-found/not-found.component'
import { MaintenanceComponent } from './pages/error/maintenance/maintenance.component'
import { ButtonComponent } from './components/events/button/button.component'
import { TextComponent } from './components/input/text/text.component'
import { TextareaComponent } from './components/input/textarea/textarea.component'
import { CheckboxComponent } from './components/input/checkbox/checkbox.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ApplicationComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NotFoundComponent,
    MaintenanceComponent,
    ButtonComponent,
    TextComponent,
    TextareaComponent,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
