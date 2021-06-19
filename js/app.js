let newArr = []
let orginalArr = []
const todoList = document.querySelector('.todo-list')
function createTodo(todoText) {
  const todo = document.createElement('div')
  todo.classList.add('todo')

  const li = document.createElement('li')
  li.innerText = todoText

  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('todo-delete')
   const deleteIcon = document.createElement('i')
   deleteIcon.classList.add('fas', 'fa-trash')
   deleteBtn.appendChild(deleteIcon)
   deleteBtn.addEventListener('click', handleDelete)

   const completeBtn = document.createElement('button')
   completeBtn.classList.add('todo-complete')
   const completeIcon = document.createElement('i')
   completeIcon.classList.add('fas', 'fa-check')
   completeBtn.appendChild(completeIcon)
   completeBtn.addEventListener('click', handleComplete)

   todo.append(li, completeBtn, deleteBtn)
   todoList.appendChild(todo)
}



function handleDelete(){
  this.parentNode.remove()
  orginalArr = []

  document.querySelectorAll('.todo').forEach((to) => {
    orginalArr.push(to)
  })
}
function handleComplete(){
   this.parentNode.classList.toggle('complete')
   orginalArr = []

   document.querySelectorAll('.todo').forEach((to) => {
     orginalArr.push(to)
   })
}

document.querySelector('.todo-form').addEventListener('submit', function(e){
e.preventDefault()
let inputValue = document.querySelector('.submit-input').value
 if (inputValue.length > 0) {
   createTodo(inputValue)
   
 }
 document.querySelector('.submit-input').value = ''
})

document.querySelector('.filter-todo').addEventListener('change', (e) => {
   console.log(orginalArr)
   orginalArr.forEach((e2) => {
     todoList.appendChild(e2)
   })
   optionValue = e.currentTarget.options[e.currentTarget.selectedIndex].value
   console.log(optionValue)
   const todos = document.querySelectorAll('.todo')
   orginalArr = []
   todos.forEach(to => {
      orginalArr.push(to)
   })
   removeTodoList()
   if (optionValue === 'completed') {
     todos.forEach((el) => {
       if (el.classList.contains('complete')) {
         newArr.push(el)
         newArr.forEach((ele) => {
           todoList.appendChild(ele)
         })
       }
     })
   } else if (optionValue === 'uncompleted') {
     todos.forEach((el) => {
       if (!el.classList.contains('complete')) {
         newArr.push(el)
         newArr.forEach(ele => {
            todoList.appendChild(ele)
         })
       }
     })
   } else if (optionValue === 'all') {
      console.log(orginalArr)
     orginalArr.forEach(ele => {
        todoList.appendChild(ele)
     })
   }
   newArr = []
})

function removeTodoList(){
   document.querySelectorAll('.todo').forEach(e => {
      e.remove()
   })
}