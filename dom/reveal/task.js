const divs = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    for (const div of divs) {
        const { top, bottom } = div.getBoundingClientRect();
        if (bottom < 0 || top > window.innerHeight) {
            div.classList.remove('reveal_active');
        } else {
            div.classList.add('reveal_active');
        }
    }
})