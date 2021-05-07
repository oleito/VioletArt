import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { PortfolioComponent } from './portfolio.component';
import { ProyectoDetalleComponent } from './proyecto-detalle/proyecto-detalle.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: 'proyectos/proyecto-detalle',
    component: ProyectoDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
