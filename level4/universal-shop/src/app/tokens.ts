import {InjectionToken, Type} from '@angular/core';

export interface ComponentTypes {
  [index: string]: Type<{}>;
}

export const COMPONENT_TYPES_TOKEN =
    new InjectionToken<ComponentTypes>('ComponentTypes');
