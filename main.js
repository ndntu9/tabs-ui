const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabBtns = $$('.tab__btn');
const tabContents = $$('.tab__content');
const tabLine = $('.tab__line');

const lineColors = [
    'linear-gradient(90deg, rgba(76, 158, 226, 1) 0%, rgba(115, 191, 255, 1) 38%)',
    'linear-gradient(90deg, rgba(255, 173, 151, 1) 0%, rgba(255, 91, 46, 1) 38%)',
    'linear-gradient(90deg, rgba(255, 217, 134, 1) 0%, rgba(250, 191, 62, 1) 38%)'
];

tabBtns.forEach((tabBtn, index) => {
    tabBtn.onclick = function () {
        $('.tab__btn.active').classList.remove('active');
        $('.tab__content.active').classList.remove('active');

        this.classList.add('active');
        tabContents[index].classList.add('active');

        tabLine.style.background = lineColors[index];
        tabLine.style.width = this.clientWidth * 0.8 + 'px';
        tabLine.style.left = this.offsetLeft + 'px';
    };
});
