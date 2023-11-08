import { compareAsc, format, parseISO, startOfToday } from 'date-fns';
import { clearForm } from './DOM-Stuff';
import { saveDataToLocal } from './localStorage';

// Testing out date-fns
const result = startOfToday();
console.log(`Today's date is ${result}`);

// Create an array for ToDo, if needed.
let toDoArray = [];

// Factory function to create todo list

export const createToDo = () => {
  let Title = document.getElementById('Title').value;
  let DueDate = document.getElementById('DueDate').value;
  let Priority = document.getElementById('Priority').value;
  let Description = document.getElementById('Description').value;

  // Check to see if empty fields exist
  // if (Title == '' || Description == '' || DueDate == '') {
  //   alert(
  //     'Title, Description, and Due Date are required fields, please try again!'
  //   );
  //   return;
  // }

  // Check to see if a pre-date was entered // Using date-fns library for this.
  if (parseISO(DueDate) < startOfToday()) {
    alert(
      'You have entered a date that has already passed! Please enter a date greater than todays date'
    );
  }

  // Loop over the nodelist  for check List items from the DOM and format to string then push them into an array
  const nodeListCheckList = document.querySelectorAll('li');
  let checkListArray = [];
  for (let i = 0; i < nodeListCheckList.length; i++) {
    // Removing the "x" marker from every li item before pushing into an array
    let strippedCheckList = nodeListCheckList[i].textContent.replace(
      '\u00D7',
      ''
    );

    // Pushing the stripped li's into the array
    checkListArray.push(strippedCheckList);
  }

  // Seperates the array with a comma, stringifying it essentially
  let CheckList = checkListArray.join(', ');

  // Remove below two lines if not needed later
  toDoArray.push({ Title, Description, DueDate, Priority, CheckList });
  console.log(toDoArray);

  // Reset form after submission
  clearForm();

  // Push data to local storage
  saveDataToLocal({ Title, Description, DueDate, Priority, CheckList });

  return { Title, Description, DueDate, Priority, CheckList };
};
