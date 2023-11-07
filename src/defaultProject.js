export const defaultProject = () => {
  console.log('Called defaultProject module, creating blank project array');
  let projectsArray = [];
  console.log('Pushing the title name of the project to the array');
  let projectTitle = 'Default Project';
  projectsArray.push({ projectTitle });
  console.log(projectsArray);
  return { projectsArray, projectTitle };
};
