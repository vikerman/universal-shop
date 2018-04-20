import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader, Injector, NgModuleRef, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentTypes, COMPONENT_TYPES_TOKEN } from './tokens';

@NgModule({
  imports: [
    BrowserModule,
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
  ],
})
export class AppBootstrapModule {
  constructor(
    private injector: Injector,
    private loader: NgModuleFactoryLoader,
  ) { }

  ngDoBootstrap(appRef: ApplicationRef) {
    // TODO: Get this list dynamically from the server depending on the route we are at.
    [
      './add-to-cart/add-to-cart.module#AddToCartModule',
      './lazy-img/lazy-img.module#LazyImageModule',
    ].forEach(id => {
      this.loader.load(id).then(ngFactory => {
        ngFactory.create(this.injector);
      });
    });

    this.loader.load('./app.module#AppModule').then(ngFactory => {
        // Load the full app and keep it ready. Swap it in during route changes.
        /*      
        const moduleInstance: NgModuleRef<{}> = ngFactory.create(this.injector);
        const types =
            moduleInstance.injector.get<ComponentTypes>(COMPONENT_TYPES_TOKEN);
        const componentFactory =
            moduleInstance.componentFactoryResolver.resolveComponentFactory(
                types['app-root']);
        appRef.attachView(
            componentFactory.create(moduleInstance.injector, [], 'app-root').hostView);
        appRef.tick();
        */
    });
  }
}
