const form = document.getElementById('signin__form');
const userStorage = localStorage.getItem('user_id');

// localStorage.removeItem('user_id');
if (userStorage) {
    show_greeting(userStorage);
}

function show_greeting(user_id) {
    document.getElementById('signin').classList.remove('signin_active');
    document.getElementById('user_id').textContent = user_id;
    document.getElementById('welcome').classList.add('welcome_active');
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.onload = (() => {
        const data = xhr.response;
        console.log(data);
        if (data['success']) {
            show_greeting(data['user_id']);
            localStorage.setItem('user_id', data['user_id']);
        } else {
            form.reset();
            alert('Неверные логин/пароль');
        }
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.send(formData);
});
