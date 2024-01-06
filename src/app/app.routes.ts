import { Routes } from '@angular/router';
import { NotepadComponent } from './pages/notepad/notepad.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    title: 'Home',
    path: 'home',
    component: AppComponent,
  },
  {
    title: 'Notepad App',
    path: 'notepad',
    component: NotepadComponent,
  }
];
