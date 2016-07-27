// app
import {OnInit, OnDestroy} from '@angular/core';
import {BaseComponent, LogService} from '../../frameworks/core/index';
import {LangSwitcherComponent} from '../../frameworks/i18n/index';
import {NavbarComponent} from './navbar.component';
let instance = 0;

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],
  directives: [LangSwitcherComponent, NavbarComponent]
})
export class ToolbarComponent implements OnInit, OnDestroy {
  private instanceNo = ++instance;

  constructor(private log: LogService) {}

  public openLanguages(e: any): void {
    this.log.debug('openLanguages');
  }

  ngOnInit() {
    console.log(`ToolbarComponent<${this.instanceNo}>.ngOnInit()`);
  }

  ngOnDestroy() {
    console.log(`ToolbarComponent<${this.instanceNo}>.ngOnDestroy()`);
  }
}
