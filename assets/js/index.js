const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-menu');
const header = document.querySelector('header');
const menuBg = document.querySelector('.menu-bg');



document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');


    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');

    }


});

window.addEventListener('scroll', function() {
    const headerTop = document.querySelector('header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});

document.querySelector('.form-box').addEventListener('submit', function (e) {
    e.preventDefault();

    const inputs = document.querySelectorAll('.form-input-label input');
    let isValid = true;

    inputs.forEach(input => {
        const parent = input.parentElement;
        const errorText = parent.querySelector('.form-error');

        if (!input.value.trim()) {
            isValid = false;
            parent.classList.add('error');

            if (!errorText) {
                const error = document.createElement('div');
                error.className = 'form-error';
                error.textContent = 'This field is required';
                parent.appendChild(error);
            }
        } else {
            parent.classList.remove('error');
            if (errorText) errorText.remove();
        }
    });

    if (isValid) {
        alert('Form submitted successfully!');
    }
});
document.querySelector('.form-acceptance').addEventListener('click', function () {
    const icon = document.querySelector('.form-acceptance-icon');
    icon.classList.toggle('checked');
});


handleScroll();

function handleScroll() {
    const elements = document.querySelectorAll('.animation');
    elements.forEach(element => {
        const elementRect = element.getBoundingClientRect();
        const isElementVisible = elementRect.top < window.innerHeight && elementRect.bottom >= 0;

        if (isElementVisible) {
            if (!element.classList.contains('active')) {
                element.classList.add('active');
            }
        } else {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', handleScroll);
