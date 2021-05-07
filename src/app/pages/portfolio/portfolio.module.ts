import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GaleriaComponent } from './galeria/galeria.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectoDetalleComponent } from './proyecto-detalle/proyecto-detalle.component';


@NgModule({
  declarations: [PortfolioComponent, GaleriaComponent, ProyectosComponent, ProyectoDetalleComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
  ]
})
export class PortfolioModule { }
