import { Injectable, signal, computed } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos = signal<Todo[]>([]);
  private nextId = signal(1);

  // Public readonly access to todos
  readonly allTodos = computed(() => this.todos());
  readonly completedTodos = computed(() => this.todos().filter((todo) => todo.completed));
  readonly activeTodos = computed(() => this.todos().filter((todo) => !todo.completed));

  addTodo(text: string): void {
    if (text.trim()) {
      const newTodo: Todo = {
        id: this.nextId(),
        text: text.trim(),
        completed: false,
      };

      this.todos.update((todos) => [...todos, newTodo]);
      this.nextId.update((id) => id + 1);
    }
  }

  deleteTodo(id: number): void {
    this.todos.update((todos) => todos.filter((todo) => todo.id !== id));
  }

  toggleTodo(id: number): void {
    this.todos.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  }

  clearCompleted(): void {
    this.todos.update((todos) => todos.filter((todo) => !todo.completed));
  }
}
