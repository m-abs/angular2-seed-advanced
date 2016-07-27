// app
import {OnInit, OnDestroy} from '@angular/core';
import {RouteComponent} from '../../frameworks/core/index';
let instance = 0;

@RouteComponent({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private instanceNo = ++instance;
  ngOnInit() {
    console.log(`NavbarComponent<${this.instanceNo}>.ngOnInit()`);
  }

  ngOnDestroy() {
    console.log(`NavbarComponent<${this.instanceNo}>.ngOnDestroy()`);
  }
}
