import { Component } from '@angular/core';
import { NAV_BAR_ENTRIES } from '../departments';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  entries = NAV_BAR_ENTRIES;
}
