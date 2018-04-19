import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, InjectionToken } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';

export const HTTP_BASE_URL = new InjectionToken<string>('HTTP_BASE_URL');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartIconComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'app' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    MatBadgeModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    HttpClientModule,
    TransferHttpCacheModule,
  ],
  providers: [
    { provide: HTTP_BASE_URL, useValue: 'http://localhost:4200' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
