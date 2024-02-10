const progress = document.getElementById('progress');
const form = document.getElementById('form');
const btn = document.getElementById('send');

btn.addEventListener('click', () => {
    const formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.onloadstart = function () {
        console.log('Начало запроса');
    }
    xhr.upload.onprogress = function () {
        progress.value += 0.1;
        console.log(`Происходит передача данных: ${progress.value}`);
    }
    xhr.upload.onload = function () {
        progress.value = 0;
        console.log('Данные полностью загружены на сервер!');
    }
    xhr.upload.onerror = function () {
        console.log('Произошла ошибка при загрузке данных на сервер!');
    }
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
});