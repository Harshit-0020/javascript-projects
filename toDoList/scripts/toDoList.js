const taskArray = [];

      function addTask(){
        const taskName = document.querySelector('.js-task-name');
        const taskDate = document.querySelector('.js-task-date');
        const taskObject = {
          'name': taskName.value,
           'date': taskDate.value
          }
        taskArray.push(taskObject);

        //Reset the placeholder
        taskName.value = '';
        taskDate.value = '';
      }
      
      function renderTodoList(){
        let toDoListHTML = '';

        for (let i = 0; i < taskArray.length; i++) {
          const taskObject = taskArray[i];
          toDoListHTML += `
          <div>
            ${taskObject.name}
            </div>
            <div>
            ${taskObject.date}
            </div>
            <button class='delete-todo-button' onclick="
            taskArray.splice(${i},1);
            renderTodoList();
            ">
            Delete
            </button>`;
        }

        const taskBoard = document.querySelector('.js-task-board');
        taskBoard.innerHTML = toDoListHTML;

      }