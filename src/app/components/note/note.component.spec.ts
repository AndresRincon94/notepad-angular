import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { NoteComponent } from './note.component';
import { notesMock } from '../../services/__mock__/notes.mock';
import { NoteService } from '../../services/note.service';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let debugElement: DebugElement;
  let noteService: NoteService;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    // noteService = debugElement.injector.get(NoteService);
    noteService = TestBed.inject(NoteService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default notes', () => {
    expect(component).toBeTruthy();
    expect(component.notes).toEqual(notesMock);
  });

  it('should render the first default note', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.note-wrapper > h2').textContent).toEqual(
      'First Note'
    );
  });

  it('should call setSelectedNote function when user click the note', () => {
    const setSelectedNoteSpy = spyOn(noteService, 'setSelectedNote');
    const noteWrapper = debugElement.query(By.css('.note-wrapper'));
    const noteStyles = getComputedStyle(noteWrapper.nativeElement);

    noteWrapper.triggerEventHandler('click', null);

    expect(noteStyles.border).toEqual('1px solid rgb(0, 0, 0)');
    expect(setSelectedNoteSpy).toHaveBeenCalled();
  });
});
