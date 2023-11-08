import { defaultProject } from './defaultProject';
import { initialDomPage, addItemToCheckList, clearForm } from './DOM-Stuff';
import { createToDo } from './create-to-do';

// Call defaultProject module to initiate the page on first load
// defaultProject();

// Call initialDomPage module to control the DOM elements on the page
// initialDomPage();

// Click events module
let clickEventsModule = (function () {
  // Click event for adding an item to the checklist on the form
  const addToCheckList = document.querySelector('.add-to-checklist');
  addToCheckList.addEventListener('click', addItemToCheckList);

  // Click event to clear the form
  const clearButton = document.querySelector('.reset-button');
  clearButton.addEventListener('click', clearForm);

  // Click event to submit a new todo form to project
  const submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', createToDo);
})();
