import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Task } from './../../model/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksListComponent {

  @Input('tasks') tasks$: Observable<Task[]>;
  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() edit: EventEmitter<any> = new EventEmitter(false);

  onRemove(task) {
    this.remove.emit(task);
  }

  onUpdate(task) {
    this.edit.emit(task);
  }
}
