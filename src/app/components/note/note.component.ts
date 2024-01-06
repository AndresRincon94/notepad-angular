import { Component } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { INote } from './INote';
import { NoteFormComponent } from '../note-form/note-form.component';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [NoteFormComponent],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  notes = this.noteService.notes;

  constructor(private noteService: NoteService){}

  selectNote(newNoteSelected: INote) {
    this.noteService.setSelectedNote({
      ...newNoteSelected,
      selected: true
    });
  }
}
