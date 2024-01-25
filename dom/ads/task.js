const texts = document.querySelectorAll('.rotator__case');

let index = 0;
let delay = texts[index].getAttribute('data-speed');

function main() {
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

    delay = texts[index].getAttribute('data-speed');
    texts[index].style.color = texts[index].getAttribute('data-color');
    timer.setInterval(delay);
}

function Timer(callback, interval) {
    this.callback = callback;
    this.timerId = null;
    this.setInterval(interval);
}

Timer.prototype.setInterval = function (val) {
    if (this.timerId !== null) {
        clearInterval(this.timerId);
    }
    this.timerId = setInterval(this.callback, val);
}

let timer = new Timer(main, delay);