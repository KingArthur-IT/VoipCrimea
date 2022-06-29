//checkbox
[...document.getElementsByClassName('checkbox')].forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('checked')
    })
})

//popup
document.getElementById('call-form').addEventListener('click', () => {
    document.getElementsByClassName('popup')[0].classList.add('popup-visible');
});

document.getElementsByClassName('form__close')[0].addEventListener('click', () => {
    document.getElementsByClassName('popup')[0].classList.remove('popup-visible');
});

document.getElementsByClassName('popup')[0].addEventListener('click', () => {
    document.getElementsByClassName('popup')[0].classList.remove('popup-visible');
});

document.getElementById('popup-form').addEventListener('click', (e) => {
    e.stopPropagation();
});

//select
document.getElementById('city-select').addEventListener('click', () => {
    document.getElementsByClassName('header__city-list')[0].classList.toggle('select-show');
});

[...document.getElementsByClassName('header__city-item')].forEach( (el) => {
    el.addEventListener('click', () => {
        document.getElementById('city-select').textContent = el.textContent;
        document.getElementsByClassName('header__city-list')[0].classList.toggle('select-show');
    })
});