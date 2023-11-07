import { defaultProject } from './defaultProject';
import { initialDomPage } from './DOM-Stuff';
import { createToDo } from './create-to-do';

// Call defaultProject module to initiate the page on first load
defaultProject();

// Call initialDomPage module to control the DOM elements on the page
initialDomPage();

// Calling the createToDo module

const myToDo = createToDo(
  'Study coding',
  'Finish the to-do-list project on TOP',
  'Saturday the 11th ',
  'Urgent'
);

const myToDo2 = createToDo(
  'Tidy my room',
  'Need to dedust my computer table, put away my clothes, and vacuum the floor',
  'Today',
  'Important'
);

console.log('Show me the properties of the first toDo on index.js....', myToDo);
console.log(
  'Show me the properties of the second toDo on index.js....',
  myToDo2
);
