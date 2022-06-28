[...document.getElementsByClassName('checkbox')].forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('checked')
    })
})

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