// angular
import {OnInit, OnDestroy} from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
let instance = 0;

// app
import {NameListService} from '../../frameworks/app/index';
import {AnalyticsService} from '../../frameworks/analytics/index';
import {RouteComponent, PlatformDirective} from '../../frameworks/core/index';
import {LangSwitcherComponent} from '../../frameworks/i18n/index';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';

@RouteComponent({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [NameListService],
  templateUrl: 'app.component.html',
  directives: [LangSwitcherComponent, NavbarComponent, ToolbarComponent, PlatformDirective],
  changeDetection: ChangeDetectionStrategy.Default // Everything else uses OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  private instanceNo = ++instance;
  constructor(public analytics: AnalyticsService) {

  }

  ngOnInit() {
    console.log(`AppComponent<${this.instanceNo}>.ngOnInit()`);
  }

  ngOnDestroy() {
    console.log(`AppComponent<${this.instanceNo}>.ngOnDestroy()`);
  }
}
