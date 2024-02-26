const modal = document.getElementById('subscribe-modal');

if (getCookie('modal') === null) {
    modal.classList.add('modal_active');
}

modal.querySelector('.modal__close').addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('modal', 'has been shown');
});

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    try {
        const cookie = pairs.find(p => p.startsWith(name + '='));
        return cookie.substring(name.length + 1);
    } catch {
        return null;
    }
}

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=Tue, 19 Jan 2038 03:14:07 GMT';
    console.log('Cookie:', document.cookie);
}
