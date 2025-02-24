const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabPanes = $$('.tab-pane');
const tabContents = $$('.tab-content');
const tabLine = $('.tab-line');

for (let i = 0; i < tabPanes.length; i++) {
    tabPanes[i].onclick = (e) => {
        $('.tab-pane.active').classList.remove('active');
        tabPanes[i].classList.add('active');

        $('.tab-content.active').classList.remove('active');
        tabContents[i].classList.add('active');

        tabLine.style.left = tabPanes[i].offsetLeft + 'px';
    };
}
