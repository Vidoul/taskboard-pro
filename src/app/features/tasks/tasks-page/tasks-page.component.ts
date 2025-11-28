import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TaskService } from '../../../core/services/task.service';

@Component({
  selector: 'app-tasks-page',
  imports: [AsyncPipe],
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.scss'
})
export class TasksPageComponent {
  private taskService = inject(TaskService);
  tasks$ = this.taskService.tasks$;

  addTask(title: string) {
    this.taskService.addTask(title);
  }
}