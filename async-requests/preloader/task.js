let items = document.getElementById('items');
const img = document.getElementById('loader');

const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        img.classList.remove('loader_active');
        const data = xhr.response;

        for (const value of Object.values(data['response']['Valute'])) {
            addItem(value['CharCode'], value['Value']);
        }
    }
});

function addItem(code, value) {
    items.insertAdjacentHTML('beforeend', `
        <div class="item">
            <div class="item__code">
                ${code}
            </div>
            <div class="item__value">
                ${value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>
    `);
}

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();