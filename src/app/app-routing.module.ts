import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PlanComponent } from './components/plan/plan.component';
import { MantComponent } from './components/mant/mant.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'plan/:plan', component: PlanComponent },
  { path: 'mantenimiento', component: MantComponent },
  { path: 'registro', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
