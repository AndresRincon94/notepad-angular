export const notesMock = [
  {
    id: '1',
    title: 'First Note',
    description: 'This is the first note!',
    selected: false,
  },
  {
    id: '2',
    title: 'Second Note',
    description: 'This is the second note!',
    selected: false,
  }
]

export const newNoteMock = {
  id: crypto.randomUUID(),
  title: 'New Note',
  description: 'This is a new note',
  selected: true
};