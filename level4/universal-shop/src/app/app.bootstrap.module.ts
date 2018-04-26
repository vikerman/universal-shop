import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader, Injector, NgModuleRef, ApplicationRef, NgModuleFactory } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentTypes, COMPONENT_TYPES_TOKEN } from './tokens';


declare var System;

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

  private load<T>(module: Promise<{[k: string]: NgModuleFactory<T>}>, factory: string): Promise<NgModuleRef<T>> {
    return module.then(m => m[factory]).then(ngFactory => {
      return ngFactory.create(this.injector);
    });
  }

  ngDoBootstrap(appRef: ApplicationRef) {
    // Work-around till Lazy modules in CLI properly work with AOT.
    this.load(System.import('src/app/add-to-cart/add-to-cart.module.ngfactory'),
      'AddToCartModuleNgFactory');
    this.load(System.import('src/app/lazy-img/lazy-img.module.ngfactory'),
      'LazyImageModuleNgFactory');

    /*
    this.load(System.import('src/app/app.module.ngfactory'), 'AppModuleNgFactory').then(
      moduleInstance => {
        console.log('Application loaded');
        const types = moduleInstance.injector.get<ComponentTypes>(COMPONENT_TYPES_TOKEN);
        const componentFactory =
          moduleInstance.componentFactoryResolver.resolveComponentFactory(types['app-root']);
        appRef.attachView(componentFactory.create(moduleInstance.injector, [], 'app-root').hostView);
        appRef.tick();
      }
    );
    */
  }
}
