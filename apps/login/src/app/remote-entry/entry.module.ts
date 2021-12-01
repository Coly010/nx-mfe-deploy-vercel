import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { LoginComponent, LoginModule } from '@ng-mfe/login/login';

@NgModule({
  imports: [
    LoginModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
