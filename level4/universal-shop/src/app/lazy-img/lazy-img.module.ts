import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { LazyImageComponent } from './lazy-img.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [LazyImageComponent],
  entryComponents: [LazyImageComponent],
})
export class LazyImageModule {
  constructor(injector: Injector) {
    const elCtor = createCustomElement(LazyImageComponent, {injector});
    customElements.define('lazy-img', elCtor);
  }
}
