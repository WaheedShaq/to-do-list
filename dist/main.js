(()=>{"use strict";const e=()=>{console.log("Called defaultProject module, creating blank project array");let e=[];console.log("Pushing the title name of the project to the array");let t="Default Project";return e.push({projectTitle:t}),console.log(e),{projectsArray:e,projectTitle:t}};let t=[];const o=(e,o,r,c,i)=>(console.log("Called createToDo module..creating todo now"),console.log({title:e,description:o,dueDate:r,priority:c,checkList:i}),console.log("Pushing this object to toDoArray"),t.push({title:e,description:o,dueDate:r,priority:c,checkList:i}),console.log("Showing the properties of the toDoArray after a push in create-to-do.js",t),{title:e,description:o,dueDate:r,priority:c,checkList:i});e(),(()=>{const t=document.createElement("div");t.textContent=e().projectTitle,contentDiv.appendChild(t)})();const r=o("Study coding","Finish the to-do-list project on TOP"," 11/11/2023","Urgent","Practice webpack"),c=o("Tidy my room","Need to dedust my computer table, put away my clothes, and vacuum the floor","8/11/2023","Important","Meat");console.log("Show me the properties of the first toDo on index.js....",r),console.log("Show me the properties of the second toDo on index.js....",c)})();