import { defaultProject } from './defaultProject';

// DOM FOR THE HEADING
export const initialDomPage = () => {
  const contentDiv = document.querySelector('.content');
  const heading = document.createElement('h1');
  heading.textContent = 'To-do-list app!';
  contentDiv.appendChild(heading);

  // DOM FOR THE DEFAULT PROJECT LOAD
  const projectsInfoDiv = document.createElement('div');
  projectsInfoDiv.textContent = defaultProject().projectTitle;
  contentDiv.appendChild(projectsInfoDiv);
};