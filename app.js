//Delete and check task
const list = document.querySelector('.main-list');
list.addEventListener('click', function(e){
  if(e.target.className == 'ion-trash-a delete-task'){
    const listItem = e.target.parentElement;
    listItem.remove();
  }
  else if(e.target.className == 'ion-ios-checkmark-outline unchecked'){
    e.target.className = 'ion-ios-checkmark-outline checked';
  } 
});
//Adding new element
const addItem = document.forms['add-task'];
addItem.addEventListener("submit", addNewTask);

function addNewTask(e){
  e.preventDefault();
  let addTask = addItem.querySelector('#task').value;
  const newItem = document.createElement('li');
  newItem.className = "list-task";
  newItem.innerHTML = '<span class="task-name">' + addTask + '</span><i class="ion-trash-a delete-task"></i> <i class="ion-ios-checkmark-outline unchecked"></i>';
  list.appendChild(newItem);
}

//Filterable Search section
const search = document.querySelector('#search');
search.addEventListener('keyup', filterableSearch);

function filterableSearch(){
  let numberOfTasks = document.getElementsByClassName('list-task');
  let filterSearch = search.value.toLowerCase();

  for(let i = 0; i < numberOfTasks.length; i++){
    let taskName = numberOfTasks[i].getElementsByClassName('task-name')[0].innerHTML;
    if(taskName.toLowerCase().indexOf(filterSearch) > -1){
      numberOfTasks[i].style.display = '';
      console.log(taskName);
    }
    else{
      numberOfTasks[i].style.display = 'none';
    }
  }
  
}

