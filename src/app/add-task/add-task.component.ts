import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  title: string = '';
  description: string = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.title.trim() !== '') {
      this.taskService
        .addTask(this.title, this.description)
        .subscribe(() => {
          this.title = '';
          this.description = '';
        });
    }
  }
}
