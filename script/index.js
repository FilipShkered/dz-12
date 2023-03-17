const input = document.querySelector('#msgInput');
const btn = document.querySelector('#msgButton');
const ul = document.querySelector('#todoList');

btn.addEventListener('click', onBtnClick);

function onBtnClick() {
  const todo = getData()

  if (!isTodoValid(todo)) {
    showError()
    return
  }

  writeTodo(todo)

  clear()
};


function getData() {
  return { message: input.value}
}

function isTodoValid(todo) {
return todo.message !== ''
}

function showError() {
  alert('Поле не может быть пустым')
}

function writeTodo(todo) {
  const li = document.createElement('li')
  li.textContent = todo.message
  
  ul.append(li)
}

function clear() {
  input.value = ''
}
