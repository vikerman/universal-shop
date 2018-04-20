import { NgModule, Injector, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { AddToCartComponent } from './add-to-cart.component';
import { CartBadgeComponent } from './cart-badge.component';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  imports: [
    CommonModule,
    MatBadgeModule,
  ],
  declarations: [AddToCartComponent, CartBadgeComponent],
  entryComponents: [AddToCartComponent, CartBadgeComponent],
})
export class AddToCartModule {
  constructor(injector: Injector) {
    ([
      ['add-to-cart', AddToCartComponent] ,
      ['cart-badge', CartBadgeComponent] ,
    ] as Array<[string, Type<any>]>).forEach(value => {
      const ctor = createCustomElement(value[1], {injector});
      customElements.define(value[0], ctor);
    });
  }
}
