const texts = document.querySelectorAll('.rotator__case');

let index = 0;
const intId = setInterval(() => {
    for (let i = 0; i < texts.length; i++) {
        if (i == index) {
            texts[i].classList.add('rotator__case_active');
        } else {
            texts[i].classList.remove('rotator__case_active');
        }
    }
    index++;
    if (index == texts.length) {
        index = 0;
    }
}, 1000);