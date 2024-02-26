const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.onloadstart = function () {
        console.log('Начало запроса');
    }

    xhr.upload.onload = function () {
        console.log('Данные загружены');
    }

    xhr.upload.onerror = function () {
        console.log('Произошла ошибка при загрузке данных на сервер!');
    }

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            const data = xhr.response;
            console.log(data);
            if (data['success']) {
                signin.classList.remove('signin_active');
                document.getElementById('user_id').textContent = data['user_id'];
                welcome.classList.add('welcome_active');
            } else {
                alert('Неверные логин/пароль');
            }
        }
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.send(formData);
});
