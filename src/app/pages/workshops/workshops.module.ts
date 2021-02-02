import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopsRoutingModule } from './workshops-routing.module';
import { WorkshopsComponent } from './workshops.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [WorkshopsComponent],
  imports: [
    CommonModule,
    WorkshopsRoutingModule,
    SharedModule
  ]
})
export class WorkshopsModule { }
