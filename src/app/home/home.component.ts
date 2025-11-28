import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TaskService } from '../core/services/task.service';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private taskService = inject(TaskService);
  tasks$ = this.taskService.tasks$;

  addTask(title: string) {
    this.taskService.addTask(title);
  }
}