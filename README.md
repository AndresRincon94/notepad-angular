´´Angular Notepad App´´

´´Introduction

Notepad App is a simple list of notes you can select and simple form that can be used for
creating new notes or editing existing ones.

´Problem statement´

Your task is to complete simple notes application using provided NotesService to save and
read notes. Keep in mind the following requirements:

´1. Use NotesService to populate list of notes´

  - Each item in list should show note title
  - Selecting note should highlight it
  - New saved notes should be added to the end of the list and selected
  - Changes in form 􀅣elds should not re􀅤ect on the list until note is saved

´2. Note Form´

  - Form should be displayed only when note is selected or there is new note
  - It should be empty when new note is selected
  - When note is selected form should show note details
  - Note should be saved when Save button is clicked
  - When required 􀅣elds are empty, error should be displayed

´3. A bit of style´

  - When note is set to favorite and saved it should have bigger font (16px)
  - Note title on the list should have note's color

´IMPORTANT´

Please, do not use Reactive Forms and under no condition do not change any test 􀅣les in the
process.
Do not change the public API of the NotesService and the AppComponent classes (public API is
public methods and public properties). Even if you locally change the public API of these
classes along with respective tests, be aware that eventually your solution will be executed
against original tests and original public API. Breaking the public API, which the tests depend
on, might result in lower score.

For more details please run task inside devskiller and see failing tests.