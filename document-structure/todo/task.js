const input = document.getElementById('task__input');
const btn = document.getElementById('tasks__add');
let tasksList = document.querySelector('.tasks__list');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (input.value.trim() === '') {
        return;
    }
    tasksList.insertAdjacentHTML('beforeEnd', `
        <div class="task">
        <div class="task__title">
            ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
        </div>
    `);
    input.value = '';
    const a = tasksList.lastElementChild.querySelector('.task__remove');
    a.addEventListener('click', (e) => {
        e.preventDefault();
        a.parentElement.remove();
    });
});