import { TestBed } from '@angular/core/testing';

import { NoteService } from './note.service';
import { newNoteMock, notesMock } from './__mock__/notes.mock';

describe('NoteService', () => {
  let service: NoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a default notes', () => {
    expect(service.notes).toBe(notesMock);
  });

  it('should have a new note in the notes array', () => {
    const newNotes = [...notesMock];
    newNotes.push(newNoteMock);

    service.addNote(newNoteMock);
    expect(service.notes).toEqual(newNotes);
  });
});
