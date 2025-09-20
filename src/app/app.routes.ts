import { Routes } from '@angular/router';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: TodoPageComponent },
  { path: 'hello', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
