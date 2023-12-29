const p = document.getElementById('timer');
let stop = false;

setInterval(() => {
    if (stop) {
        return;
    }
    let [hours, minutes, seconds] = p.textContent.split(':');
    let sumSeconds = (+hours) * 3600 + (+minutes) * 60 + (+seconds);
    if (sumSeconds > 0) {
        sumSeconds -= 1;

        hours = (sumSeconds / 3600) | 0;
        minutes = ((sumSeconds / 60) | 0) % 60;
        seconds = (sumSeconds % 60) | 0;
        if (hours < 10) {
            hours = '0' + String(hours);
        }
        if (minutes < 10) {
            minutes = '0' + String(minutes);
        }
        if (seconds < 10) {
            seconds = '0' + String(seconds);
        }

        p.textContent = hours + ':' + minutes + ':' + seconds;
    } else {
        location = window.location;
        location.assign('https://avatars.dzeninfra.ru/get-zen_doc/1708265/pub_5de628e81e8e3f00b2d1e090_5de629bdd5bbc300ae3be52a/scale_1200');
        stop = true;
    }
}, 100)