import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BookDetailsComponent } from '../book-details/book-details.component';

@Injectable()
export class ConfirmCanDeactivateGuard
  implements CanDeactivate<BookDetailsComponent> {

  canDeactivate(
    component: BookDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    return confirm('Are you sure?');
  }
}
