import {NgModule} from '@angular/core';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

import {AppModule, HTTP_BASE_URL} from './app.module';
import {AppComponent} from './app.component';
import { ShoppingCartService, CartEntry } from './shopping-cart.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { Item } from './item';

export class MockShoppingCartService {
  onChanged: Subject<number> = new BehaviorSubject<number>(0);
  getTotalCount() { return 0; }
  add(item: Item) {}
  getCartEntries() { return []; }
  delete(entry: CartEntry) { }
}

declare var global;

export function getBaseHttpUrl() {
  return (global as any)['HTTP_BASE_URL'];
}

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    ModuleMapLoaderModule // <-- *Important* to have lazy-loaded routes work
  ],
  providers: [
    {provide: ShoppingCartService, useClass: MockShoppingCartService},
    {provide: HTTP_BASE_URL, useFactory: getBaseHttpUrl},
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent],
})
export class AppServerModule {}
