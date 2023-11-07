// Create an array for ToDo, if needed.
let toDoArray = [];

// Factory function to create todo list

export const createToDo = (title, description, dueDate, priority) => {
  console.log('Called createToDo module..creating todo now');
  console.log({ title, description, dueDate, priority });
  console.log('Pushing this object to toDoArray');
  toDoArray.push({ title, description, dueDate, priority });
  console.log(
    'Showing the properties of the toDoArray after a push in create-to-do.js',
    toDoArray
  );
  return { title, description, dueDate, priority };
};
