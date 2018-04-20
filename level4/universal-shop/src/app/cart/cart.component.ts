import { Component } from '@angular/core';
import { ShoppingCartService, CartEntry } from '../shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  count = 0;
  entries: CartEntry[] = [];

  constructor(private readonly cart: ShoppingCartService) { }

  ngOnInit() {
    this.cart.onChanged.subscribe(count => {
      this.count = count;
      this.entries = this.cart.getCartEntries();
    });
  }

  getTotal() {
    let price = 0;
    for (const entry of this.entries) {
      price += entry.count * entry.item.price;
    }
    return price.toFixed(2);
  }

  delete(entry: CartEntry) {
    this.cart.delete(entry);
  }
}
