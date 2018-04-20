import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NAV_BAR_ENTRIES } from './departments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private location : Location) {}

  entries = NAV_BAR_ENTRIES;

  isCart() {
    return this.location.path() === '/cart';
  }

  back() {
    this.location.back();
  }
}
