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
    li.textContet = addItem;
    const span = document.createElement('span');
    span.classname = 'remove-checklist-item';
    const removeIcon = document.createTextNode('\u00d7');
  }
}
