import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ContentChildren, Inject, Input, Optional, QueryList } from '@angular/core';
import { WshAccordionConfig, WSH_ACCORDION_CONFIG } from './accordion.config';
import { WshAccordionItem } from './directives/accordion-item.directive';

@Component({
  selector: "wsh-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('contentExpansion', [
      state('expanded', style({ height: '*', opacity: 1, visibility: 'visible' })),
      state('collapsed', style({ height: '0px', opacity: 0, visibility: 'hidden' })),
      transition('expanded <=> collapsed',
        animate('200ms cubic-bezier(.37,1.04,.68,.98)')),
    ])
  ]
})
export class WshAccordionComponent {

  /**
  * Egy Set-et hozunk létre a nyitott accordion itemek nyilvántartására.
  **/
  public expanded = new Set<number>();

  /**
  * Eldönti, hogy egyszerre csak egy item lehet nyitva, vagy nem.
  * Ha az értéke true akkor csak egy lehet nyitva, a többit bezárja
  **/
  @Input() collapsing = !!this.config?.collapsing;

  /**
  * Egy lista ami tartalmazza az összes accordion itemet ami át lett adva.
  **/
  @ContentChildren(WshAccordionItem) items!: QueryList<WshAccordionItem>;

  constructor(@Optional() @Inject(WSH_ACCORDION_CONFIG) private config: WshAccordionConfig) {}

  /**
  * Lehetővé teszi, hogy kívülről is meg lehessen hívni a toggle funkciót.
  * @param index - Az accordion item indexe
  **/
  getToggleState = (index: number) => {
    return this.toggleState.bind(this, index);
  };

  /**
  * Index alapján hozzáadja vagy törli az expanded nyilvántartásból az accordion itemet, figyelembe véve a collapsing inputot is.
  * @param index - Az accordion item indexe
  **/
  toggleState = (index: number) => {
    if (this.expanded.has(index)) {
      this.expanded.delete(index);
    } else {
      if (this.collapsing) {
        this.expanded.clear();
      }
      this.expanded.add(index);
    }
  };

}
