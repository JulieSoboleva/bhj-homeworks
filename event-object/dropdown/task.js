const dropboxVal = document.querySelector('.dropdown__value');
const dropboxList = document.querySelector('.dropdown__list');
const dropboxItems = document.querySelectorAll('.dropdown__item');

dropboxVal.addEventListener('click', () => {
    dropboxList.classList.toggle('dropdown__list_active');
});

for (const item of dropboxItems) {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        dropboxVal.textContent = item.textContent.trim();
        dropboxList.classList.remove('dropdown__list_active');
    });
};