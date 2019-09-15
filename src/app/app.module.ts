import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioServiciosComponent } from './components/inicio/inicio-servicios/inicio-servicios.component';
import { InicioAboutComponent } from './components/inicio/inicio-about/inicio-about.component';
import { InicioHeroComponent } from './components/inicio/inicio-hero/inicio-hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlanComponent } from './components/plan/plan.component';
import { MantComponent } from './components/mant/mant.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { ChatComponent } from './components/chat/chat.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroFormComponent } from './components/registro/registro-form/registro-form.component';
import { LoginFormComponent } from './components/registro/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    InicioComponent,
    InicioServiciosComponent,
    InicioAboutComponent,
    InicioHeroComponent,
    FooterComponent,
    PlanComponent,
    MantComponent,
    LoginBoxComponent,
    ChatComponent,
    RegistroComponent,
    RegistroFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
