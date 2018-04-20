import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NAV_BAR_ENTRIES } from './departments';
import { Router } from '@angular/router';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  entries = NAV_BAR_ENTRIES;

  constructor(
    private router: Router,
    private location : Location) {}

  ngOnInit() {  
    this.router.resetConfig(routes);

    // Kick the router since this app is lazily loaded.
    this.router.navigate([this.location.path()]);
  }
  
  isCart() {
    return this.location.path() === '/cart';
  }

  back() {
    this.location.back();
  }
}
