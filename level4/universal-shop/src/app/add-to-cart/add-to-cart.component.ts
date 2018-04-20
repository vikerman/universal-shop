import { Component, Input, ElementRef, HostListener } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'add-to-cart',
  template: '<ng-content></ng-content>',
})
export class AddToCartComponent {
  @Input('name') name: string;
  @Input('image') image: string;
  @Input('title') title: string;
  @Input('price') price: string;

  constructor(private readonly cart: ShoppingCartService) { }

  @HostListener('click') onClick() {
    this.cart.add({
      name: this.name,
      image: this.image,
      title: this.title,
      price: parseFloat(this.price),
    });
  }
}
