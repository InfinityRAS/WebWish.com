// To disable right click
const notification = document.querySelector('.another-wrapper');
notification.style.display = 'none';

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    console.log(notification.style.display);
    notification.style.display = 'contents';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
});

const openButton = document.querySelector('.menu-img-container');
const closeButton = document.querySelector('.menu-close-img');
const menu = document.querySelector('.menu');

openButton.addEventListener('click', () => {
    menu.style.display = 'inline-block';
    menu.style.animationName = 'menu-open';
    menu.style.animationDuration = '1s';
});

closeButton.addEventListener('click', () => {
    menu.style.animationName = 'menu-close';
    menu.style.animationDuration = '1s';
    setTimeout(() => {
        menu.style.display = 'none';
    }, 1000);
});

const themeChange = document.querySelector('.themeChange');
let theme = 'white';
themeChange.addEventListener('click', () => {
    const html = document.querySelector('html')
    if (theme == 'white') {
        html.style.filter = 'invert(1)';
        document.querySelectorAll(".img").forEach((e) => {
            e.style.filter = 'invert(1)';
        });
        document.querySelector("footer").style.filter = "invert(1)";
        theme = 'black';
    } else {
        html.style.filter = 'invert(0)';
        document.querySelectorAll(".img").forEach((e) => {
            e.style.filter = 'invert(0)';
        })
        document.querySelector("footer").style.filter = "invert(0)";
        theme = 'white';
    };
});