import { Component, OnInit } from '@angular/core';
import { INote } from '../note/INote';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.css'
})
export class NoteFormComponent implements OnInit {
  currentNote!: INote;
  isNewNote = true;
  
  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.noteService.getSelectedNote().subscribe((currentNote) => {
      this.currentNote = currentNote;
      this.isNewNote = !currentNote || !currentNote.id;
    }) ;
  }
  
  onSubmitHandler(){
    console.log({id: !this.currentNote.id, isNew: this.isNewNote});
    if (!this.currentNote.id) {
      this.noteService.addNote({
        ...this.currentNote,
        id: crypto.randomUUID(),
        selected: true
      })
    } else {
      this.noteService.updateNote(this.currentNote)
    }
  }

  unSelectNote() {
    this.noteService.unSetSelectedNote();
  }
}
