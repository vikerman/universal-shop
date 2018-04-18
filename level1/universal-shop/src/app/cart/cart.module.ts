import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    CartRoutingModule,
  ],
  declarations: [CartComponent]
})
export class CartModule {
}
