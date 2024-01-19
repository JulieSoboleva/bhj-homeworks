const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

for (const tab of tabs) {
    tab.addEventListener('click', () => {
        const index = tabs.indexOf(tab);
        for (let i = 0; i < tabs.length; i++) {
            if (i === index) {
                tabs[i].classList.add('tab_active');
                contents[i].classList.add('tab__content_active');
            } else {
                tabs[i].classList.remove('tab_active');
                contents[i].classList.remove('tab__content_active');
            }
        }
    });
}