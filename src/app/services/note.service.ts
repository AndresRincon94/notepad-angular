import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { notesMock } from './__mock__/notes.mock';
import { INote } from '../components/note/INote';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: INote[] = notesMock;
  selectedNote: BehaviorSubject<INote> = new  BehaviorSubject<INote>({} as INote);

  getSelectedNote() {
    return this.selectedNote.asObservable();
  }

  setSelectedNote(selectedNote: INote) {
    this.removeSelected();
    this.selectedNote.next(selectedNote);

    this.updateNote(selectedNote);
  }

  unSetSelectedNote() {
    this.selectedNote.next({} as INote);
  }

  removeSelected() {
    this.notes.map((note) => {
      note.selected = false;
    });
  }

  addNote(newNote: INote) {
    this.removeSelected();
    this.notes.push(newNote);
    this.selectedNote.next(newNote);
  }

  updateNote(newNote: INote) {   
    let currentNote = this.notes.find(n => n.id === newNote.id);
    currentNote!.title = newNote.title;
    currentNote!.description = newNote.description;
    currentNote!.selected = newNote.selected;
  }
}
