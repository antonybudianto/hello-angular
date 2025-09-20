import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()" class="todo-input-form">
      <input
        type="text"
        [(ngModel)]="inputText"
        name="todoText"
        placeholder="What needs to be done?"
        class="todo-input"
        autocomplete="off"
        #todoInput
      />
      <button type="submit" class="add-button" [disabled]="!inputText().trim()">Add Todo</button>
    </form>
  `,
  styleUrl: './todo-input.component.css',
})
export class TodoInputComponent {
  private todoService = inject(TodoService);

  inputText = signal('');

  onSubmit(): void {
    const text = this.inputText().trim();
    if (text) {
      this.todoService.addTodo(text);
      this.inputText.set('');
    }
  }
}
