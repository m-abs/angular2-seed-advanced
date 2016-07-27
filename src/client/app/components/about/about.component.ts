import {OnInit, OnDestroy} from '@angular/core';
import {BaseComponent} from '../../frameworks/core/index';
import {NavbarComponent} from '../app/navbar.component';

let instance = 0;
@BaseComponent({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives: [NavbarComponent],
})
export class AboutComponent implements OnInit, OnDestroy {
  private instanceNo = ++instance;
  ngOnInit() {
    console.log(`AboutComponent<${this.instanceNo}>.ngOnInit()`);
  }

  ngOnDestroy() {
    console.log(`AboutComponent<${this.instanceNo}>.ngOnDestroy()`);
  }
}
