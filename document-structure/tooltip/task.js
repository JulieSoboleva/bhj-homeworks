const elems = document.querySelectorAll('.has-tooltip');
const div = document.createElement('div');
div.classList.add('tooltip');

elems.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        const { top, left } = elem.getBoundingClientRect();
        const fontSize = parseFloat(window.getComputedStyle(elem).fontSize.slice(0, -2));
        div.style.left = String(left) + 'px';
        div.style.top = String(top + fontSize + 3) + 'px';
        const title = elem.getAttribute('title');
        div.classList.toggle('tooltip_active');
        div.textContent = title;
        elem.parentElement.insertBefore(div, elem);
    })
});
