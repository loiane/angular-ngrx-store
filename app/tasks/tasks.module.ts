import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { TaskStoreModule } from './store/task-store.module';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    TaskStoreModule
  ],
  declarations: [
    TasksComponent,
    TaskFormComponent,
    TasksListComponent,
    TaskItemComponent
  ]
})
export class TasksModule { }
