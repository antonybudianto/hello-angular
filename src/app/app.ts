import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoInputComponent, TodoItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Todo App');
  private todoService = inject(TodoService);

  protected readonly todos = this.todoService.allTodos;
  protected readonly activeTodos = this.todoService.activeTodos;
  protected readonly completedTodos = this.todoService.completedTodos;

  protected clearCompleted(): void {
    this.todoService.clearCompleted();
  }
}
