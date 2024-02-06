const input = document.getElementById('task__input')
const btn = document.getElementById('tasks__add')
let taskList = document.querySelector('.tasks__list')

function addTask(event) {
    event.preventDefault();
    if (input.value.trim() === '') {
        return;
    }
    let div = document.createElement('div');
    div.classList.add('task');
    taskList.appendChild(div);
    let title = document.createElement('div');
    title.classList.add('task__title');
    title.textContent = input.value;
    div.appendChild(title);
    let a = document.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('class', 'task__remove');
    a.innerHTML = '&times;';
    a.addEventListener('click', (e) => {
        e.preventDefault();
        a.parentElement.remove();
    });
    div.appendChild(a);
}

input.addEventListener('onkeyup', (e) => {
    if (e.keyCode == 13 && input.value.trim() !== '') {
        btn.click();
    }
});

btn.addEventListener('click', addTask);
