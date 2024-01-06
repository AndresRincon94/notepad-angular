import { Component } from '@angular/core';
import { NoteComponent } from '../../components/note/note.component';
import { NoteFormComponent } from '../../components/note-form/note-form.component';

@Component({
  selector: 'app-notepad',
  standalone: true,
  imports: [NoteComponent, NoteFormComponent],
  templateUrl: './notepad.component.html',
  styleUrl: './notepad.component.css'
})
export class NotepadComponent {
}
