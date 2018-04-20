import { Injectable } from '@angular/core';
import { Item } from './item';
import { Subject, BehaviorSubject } from 'rxjs';

export interface CartEntry {
  item: Item;
  count: number;
}

const CART_KEY = "CART_KEY";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private entries: { [name: string]: CartEntry } = {};

  /** Observable for current number of items in the cart */
  onChanged: Subject<number>;

  constructor() {
    // Get the initial value from localStorage.
    const storedValue = window.localStorage.getItem(CART_KEY);
    if (storedValue) {
      this.entries = JSON.parse(storedValue);
    }
    this.onChanged = new BehaviorSubject(this.getTotalCount());
  }

  private update() {
    window.localStorage.setItem(CART_KEY, JSON.stringify(this.entries));
    this.onChanged.next(this.getTotalCount());
  }

  /** Total count across all items */
  getTotalCount() {
    let count = 0;
    for (const name in this.entries) {
      count += this.entries[name].count;
    }
    return count;
  }

  /* Add a new instance of an item to the cart */
  add(item: Item) {
    const existing = this.entries[item.name];
    if (existing) {
      existing.count++;
    } else {
      this.entries[item.name] = { item, count: 1 };
    }
    this.update();
  }

  /* Get the current items */
  getCartEntries() {
    const result: CartEntry[] = []; 
    for (const name in this.entries) {
      result.push(this.entries[name]);
    }
    return result;
  }

  delete(entry: CartEntry) {
    delete this.entries[entry.item.name];
    this.update(); 
  }
}
