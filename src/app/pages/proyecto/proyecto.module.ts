import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoRoutingModule } from './proyecto-routing.module';
import { ProyectoComponent } from './proyecto.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ProyectoComponent],
  imports: [
    CommonModule,
    ProyectoRoutingModule,
    SharedModule
  ]
})
export class ProyectoModule { }
