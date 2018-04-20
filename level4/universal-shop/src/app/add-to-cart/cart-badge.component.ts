import { Component, Input, ElementRef, HostListener } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'cart-badge',
  templateUrl: './cart-badge.component.html',
})
export class CartBadgeComponent {
  count = 0;
  constructor(private readonly cart: ShoppingCartService) {
    cart.onChanged.subscribe(count => this.count = count);
  }
}
