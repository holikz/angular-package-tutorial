import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[wshButton]',
  host: {
    '[class]': '"btn " + classes',
    '[class.btn-lg]': 'size === "large"',
    '[class.btn-sm]': 'size === "small"'
  }
})
export class WshButtonDirective {

  @Input() variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' = 'primary';

  @Input() outline?: boolean = false;

  @Input() size?: 'large' | 'small';

  constructor() { }

  get classes() {
    return this.outline ? `btn-outline-${this.variant}` : `btn-${this.variant}`;
  }
}
