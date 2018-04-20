import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
  ],
})
export class AppBootstrapModule {
  constructor(private injector: Injector, private loader: NgModuleFactoryLoader) { }
  ngDoBootstrap() {
    this.loader.load('./lazy-img/lazy-img.module#LazyImageModule').then(ngFactory => {
      ngFactory.create(this.injector);
    });
  }
}
