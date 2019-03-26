import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  @Input() title = '';
  @Output() createTask: EventEmitter<string> = new EventEmitter();

  onSubmit(): void {
    const title: string = this.title.trim();
    if (title.length) {
      this.createTask.emit(title);
    }
    this.title = '';
  }
}
