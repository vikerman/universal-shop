import { NgModule, InjectionToken, CUSTOM_ELEMENTS_SCHEMA, RendererFactory2, NgZone } from '@angular/core';
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
import { COMPONENT_TYPES_TOKEN } from './tokens';
import { CommonModule } from '@angular/common';

export const HTTP_BASE_URL = new InjectionToken<string>('HTTP_BASE_URL');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartIconComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
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
    { 
      provide: COMPONENT_TYPES_TOKEN,
      useValue: {'app-root': AppComponent}
    },
  ],
  entryComponents: [AppComponent],
  exports: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
