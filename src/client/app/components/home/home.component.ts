// libs
import {OnInit, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
let instance = 0;

// app
import {FormComponent} from '../../frameworks/core/index';
import {NameListService} from '../../frameworks/app/index';
import {NavbarComponent} from '../app/navbar.component';

@FormComponent({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [NavbarComponent],
})
export class HomeComponent implements OnInit, OnDestroy {
  public newName: string = '';
  private instanceNo = ++instance;
  constructor(private store: Store<any>, public nameListService: NameListService) {

  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }

  ngOnInit() {
    console.log(`HomeComponent<${this.instanceNo}>.ngOnInit()`);
  }

  ngOnDestroy() {
    console.log(`HomeComponent<${this.instanceNo}>.ngOnDestroy()`);
  }
}
