import { InjectionToken } from '@angular/core';

export interface WshAccordionConfig {
  collapsing: boolean;
}

export const WSH_ACCORDION_CONFIG = new InjectionToken(
  'WSH_ACCORDION_CONFIG'
);
