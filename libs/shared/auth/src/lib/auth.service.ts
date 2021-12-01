import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _activeUser = new Subject<{ username: string }>();

  activeUser = this._activeUser.asObservable();

  login({ username, password }: { username: string; password: string }) {
    if (password === 'password') {
      this._activeUser.next({ username });
      return true;
    }
    return false;
  }
}
