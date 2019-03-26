import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { TaskStoreService } from './task-store.service';
import { taskReducer } from './task.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('task', taskReducer)
  ],
  exports: [StoreModule],
  providers: [TaskStoreService]
})
export class TaskStoreModule { }