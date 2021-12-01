import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TodoListModule, ListComponent } from '@ng-mfe/todo/list';

@NgModule({
  declarations: [],
  imports: [
    TodoListModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
