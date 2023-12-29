const cookie = document.getElementById('cookie');
const p_counter = document.getElementById('clicker__counter');
const p_clickSpeed = document.getElementById('click__speed');

let sign = 1;
let start = Date.now();

cookie.onclick = () => {
    cookie.width += sign * 20;
    cookie.height += sign * 20;
    sign = -sign;
    let counter = +p_counter.textContent + 1;
    p_counter.textContent = counter;

    (() => {
        const stop = Date.now();
        const seconds = (stop - start) / 1000;
        const avgSpeed = 1 / seconds;
        start = stop;
        p_clickSpeed.textContent = avgSpeed.toFixed(2);
    })();
}
