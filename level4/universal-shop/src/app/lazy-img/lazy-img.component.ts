import {Component, Input, ElementRef} from '@angular/core';

let observer: IntersectionObserver|null = null;

const callbacks = new Map<Element, () => void>();
function observe(element: Element, callback: () => void) {
  // From https://deanhume.com/lazy-loading-images-using-intersection-observer/
  const config = {
    rootMargin: '50px 0px',
    threshold: 0.1
  };

  if (observer == null) {
    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.intersectionRatio > 0.1) {
          // Callback and delete the entry.
          if (callbacks.has(entry.target)) {
            callbacks.get(entry.target)();
            callbacks.delete(entry.target);
          }
          observer.unobserve(entry.target);
        }
      }
    }, config);
  }
  callbacks.set(element, callback);
  observer.observe(element);
}

@Component({
  selector: 'lazy-img',
  templateUrl: './lazy-img.component.html',
})
export class LazyImageComponent {
  @Input('src') src: string;
  @Input('alt') alt: string = '';

  loaded = false;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    observe((this.element.nativeElement as HTMLElement).parentElement, () => {
      this.loaded = true;
    });
  }
}