import { defaultProject } from './defaultProject';

export const initialDomPage = () => {
  const projectsInfoDiv = document.createElement('div');
  projectsInfoDiv.textContent = defaultProject().projectTitle;
  contentDiv.appendChild(projectsInfoDiv);
};

export function addItemToCheckList() {
  const addItem = document.getElementById('add-to-checklist').value;

  // Check to see if the input is empty and button was clicked, if so
  // return out of this function - do nothing
  // if not, apply new content to new li in DOM

  if (addItem !== '') {
    const ul = document.querySelector('.todo-ul');
    const li = document.createElement('li');
    li.textContent = addItem;
    const span = document.createElement('span');
    span.className = 'remove-checklist-item';

    // Creates an X icon
    const removeIcon = document.createTextNode('\u00d7');
    li.appendChild(span);
    span.appendChild(removeIcon);
    ul.appendChild(li);
    document.getElementById('add-to-checklist').value = '';

    // DOM check for existing check list items already present
    if (document.querySelectorAll('li').length > 0) {
      const nodeListCheckList = document.querySelectorAll('li');

      // DOM to bind click event to each node in nodelist and remove node if clicked
      nodeListCheckList.forEach((checkListItem) => {
        checkListItem.addEventListener(
          'click',
          function removeItemFromCheckList() {
            checkListItem.remove();
          }
        );
      });
    }
  } else return;
}

// Function to clear the form elements
export function clearForm() {
  const nodeListCheckList = document.querySelectorAll('li');
  for (let i = 0; i < nodeListCheckList.length; i++) {
    nodeListCheckList[i].remove();
  }
  document.getElementById('add-todo').reset();
}

export function displayToDo() {
  // Check and clear current display DOM
  const removeDivs = document.querySelectorAll('.card');
  console.log('Show me the count of the cards', removeDivs);
  for (let i = 0; i < removeDivs.length; i++) {
    removeDivs[i].remove();
  }

  // Create the display card for the display DOM
  console.log('Displaying to screen');
  const projects = document.querySelector('.projects');
  const card = document.createElement('div');
  card.classList.add('card');
  projects.appendChild(card);
}
