import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';

@NgModule({
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
  ],
  declarations: [DepartmentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DepartmentModule { }
