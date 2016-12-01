// libs
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

export interface ListViewItem {
  title: string;
  currentSegment?: boolean;
}

// app
import { BaseComponent, RouterExtensions } from '../../frameworks/core/index';
import { IAppState, getNames } from '../../frameworks/ngrx/index';
import * as nameList from '../../frameworks/sample/index';

@BaseComponent({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {
  public navitems = new BehaviorSubject<ListViewItem[]>(null);
  public names$: Observable<any>;
  public newName: string = '';

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {
    this.names$ = store.let(<any>getNames);

    const items: ListViewItem[] = [
      {
        'title': 'Bunker 137',
      }, {
        'title': 'Gangsta rap',
      }, {
        'title': 'Se',
        'currentSegment': true,
      }, {
        'title': 'Grantræet',
      }, {
        'title': 'Nørkel Nissegård Emmanuel Tilfreds',
      }, {
        'title': 'Gravrøverne',
      }, {
        'title': 'Drømmerens datter',
      }, {
        'title': 'Skyggeforbandelsen',
      }];

    this.navitems.next(items);
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.store.dispatch(new nameList.AddAction(this.newName));
    this.newName = '';
    return false;
  }

  readAbout() {
    // Try this in the {N} app
    // {N} can use these animation options
    this.routerext.navigate(['/about'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}
