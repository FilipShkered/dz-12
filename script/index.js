const msgInput = document.querySelector('#msgInput');
const msgButton = document.querySelector('#msgButton');
const todoList = document.querySelector('#todoList');

msgButton.addEventListener('click', () => {
  const newMsg = msgInput.value;
  const newListItem = document.createElement('li');
  const textNode = document.createTextNode(newMsg);
  newListItem.appendChild(textNode);
  todoList.appendChild(newListItem);
  msgInput.value = '';
});
