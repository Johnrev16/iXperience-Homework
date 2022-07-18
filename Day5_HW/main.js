class ToDoList {
  constructor(task, completed) {
    this.task = task;
    this.completed = "Incomplete";
  }
}

class UserInterface{
  constructor(){
    this.todo = document.getElementById('input');
    this.check = document.getElementById('complete');
    this.form = document.getElementById('form');
    this.tablebody = document.getElementById('table-body');

    this.list = [];
  }

  bindEventListeners(){
    this.form.addEventListener("submit", (e) => this.onSubmitFrom(e))
  }

  onSubmitFrom(event){
    event.preventDefault();

    const newTodo = new ToDoList(
      this.todo.value,
      this.check
    );

    this.list.push(newTodo);
    this.populateList();

    this.todo.value = "";
  }

  populateList(){
    this.tablebody.innerHTML = "";

    for (const newTodo of this.list){
      const row = document.createElement('tr');

      const taskCell = document.createElement('td');
      const completeCell = document.createElement('td');
      const actionCell = document.createElement('td');
      const checkButton = document.createElement('button');

      taskCell.innerHTML = newTodo.task;
      completeCell.innerHTML = newTodo.completed;
      checkButton.innerHTML = "Complete?";

      checkButton.addEventListener("click", (e) =>
        completeCell.innerHTML = "Complete"
      );
      actionCell.append(checkButton);

      row.append(taskCell);
      row.append(completeCell);
      row.append(actionCell);
      this.tablebody.append(row);
    }
  }
}

const ui = new UserInterface();
ui.bindEventListeners();