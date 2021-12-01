import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@ng-mfe/shared/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          children: [
            { path: '', redirectTo: 'todo', pathMatch: 'full' },
            {
              path: 'login',
              loadChildren: () =>
                import('login/Module').then((m) => m.RemoteEntryModule),
            },
            {
              path: 'todo',
              loadChildren: () =>
                import('todo/Module').then((m) => m.RemoteEntryModule),
              canActivate: [AuthGuard],
            },
          ],
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
