let title = document.getElementById('poll__title');
let answers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const data = xhr.response;
        title.textContent = data['data']['title'];
        answers.innerHTML = '';
        data['data']['answers'].forEach(answer => {
            addButton(answer);
        });
            
        const btns = document.querySelectorAll('.poll__answer');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            });
        });
    }
});

function addButton(content) {
    answers.insertAdjacentHTML('beforeend', `
        <button class="poll__answer">
            ${content}
        </button>
    `);
}

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();