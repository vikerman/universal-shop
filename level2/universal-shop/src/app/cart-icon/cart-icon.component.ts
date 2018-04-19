import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent {
  count = 0;

  constructor(private readonly cart: ShoppingCartService) {
    cart.onChanged.subscribe(count => this.count = count);
  }
}
