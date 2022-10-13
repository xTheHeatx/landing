const form = document.querySelector('.header__subscribe-form');
const input = document.querySelector('.header__email-input');

input.addEventListener('focus', function(){
    form.classList.add('form-active');
})

input.addEventListener('blur', function(){
    form.classList.remove('form-active');    
})