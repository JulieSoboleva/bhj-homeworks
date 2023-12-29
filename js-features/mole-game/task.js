const holes = [];
for (let i = 1; i < 10; i++) {
    holes.push(document.getElementById(`hole${i}`))
}

const pDead = document.getElementById('dead');
const pLost = document.getElementById('lost');

let target = +pDead.textContent;
let past = +pLost.textContent;

for (const hole of holes) {
    hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
            target += 1;
            if (target == 10) {
                target = 0;
                past = 0;
                alert('Победа!');
            }
        } else {
            past += 1;
            if (past === 5) {
                past = 0;
                target = 0;
                alert('Вы проиграли!');
            }
        }
        pDead.textContent = target;
        pLost.textContent = past;
    };
}
