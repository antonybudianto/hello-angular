import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { TodoInputComponent } from '../../components/todo-input/todo-input.component';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-page',
  imports: [TodoInputComponent, TodoItemComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoPageComponent {
  protected readonly title = signal('Todo App');
  private todoService = inject(TodoService);

  protected readonly todos = this.todoService.allTodos;
  protected readonly activeTodos = this.todoService.activeTodos;
  protected readonly completedTodos = this.todoService.completedTodos;

  protected clearCompleted(): void {
    this.todoService.clearCompleted();
  }
}
