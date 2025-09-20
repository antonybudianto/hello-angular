import { Component, input, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  template: `
    <div class="todo-item" [class.completed]="todo().completed">
      <input
        type="checkbox"
        [checked]="todo().completed"
        (change)="onToggle()"
        class="todo-checkbox"
      />
      <span class="todo-text">{{ todo().text }}</span>
      <button (click)="onDelete()" class="delete-button" aria-label="Delete todo">×</button>
    </div>
  `,
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  private todoService = inject(TodoService);

  todo = input.required<Todo>();

  onToggle(): void {
    this.todoService.toggleTodo(this.todo().id);
  }

  onDelete(): void {
    this.todoService.deleteTodo(this.todo().id);
  }
}
