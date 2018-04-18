import { Component } from '@angular/core';
import { NAV_BAR_ENTRIES } from './departments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  entries = NAV_BAR_ENTRIES;
}
