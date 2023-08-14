import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((data) => {
      console.log("data", data)
      this.tasks = data;
    });
  }

  markAsCompleted(task: any): void {
    console.log("task.id",task._id)
    this.taskService.markTaskCompleted(task._id).subscribe(() => {
      task.completed = !task.completed;
    });
  }

  deleteTask(task: any): void {
    this.taskService.deleteTask(task._id).subscribe(() => {
      this.loadTasks();
    });
  }
}
