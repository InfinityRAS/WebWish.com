const imgContainer = document.querySelector('#img-container');
// // To provide images
// const images = ['1.jpeg', '2.jpg', '3.jpeg'];
// const path = '/static/Img/';
// 
// /* imgContainer.style.background = `url("${path + images[0]}")`;
// setTimeout(() => {
//     let imgContainerbg = imgContainer.style.background;
//     console.log(images[0]);
//     imgContainer.style.background = `url(/static/Img/2.jpg)`;
// }, 3000); */
// // imgContainer.style.background = "url('/static/Img/2.jpg')"
// setInterval(() => {
//     let imgContainerBg = imgContainer.style.background;
//     // imgContainerBg = `url("${path + images[1]}")`;
//     console.log(imgContainerBg)
// }, 5000);



// to provide facilities according to the availability
const recommended = 'not available';
const premium = 'not available';
if (recommended == 'not available') {
    document.querySelector('#login-link').style.opacity = '60%';
    document.querySelector('#login-link').style.pointerEvents = 'none';
    document.querySelector('#signup-link').style.opacity = '60%';
    document.querySelector('#signup-link').style.pointerEvents = 'none';
    document.querySelector('#login').style.opacity = '60%';
    document.querySelector('#login').style.pointerEvents = 'none';
    document.querySelector('#signup').style.opacity = '60%';
    document.querySelector('#signup').style.pointerEvents = 'none';
};

if (premium == 'not available') {
    document.querySelector('#upgrade').style.opacity = '60%';
    document.querySelector('#upgrade').style.pointerEvents = 'none';
    document.querySelector('.upgrade').style.opacity = '60%';
    document.querySelector('.upgrade').style.pointerEvents = 'none';
};


// Theme Change
const themeChange = document.querySelector('.themeChange');
let theme = 'white';
themeChange.addEventListener('click', () => {
    const html = document.querySelector('html')
    if (theme === 'white') {
        html.style.filter = 'invert(1)';
        imgContainer.style.filter = 'invert(1)';
        document.querySelector('footer').style.filter = 'invert(1)';
        theme = 'black';
    } else {
        html.style.filter = 'invert(0)';
        imgContainer.style.filter = 'invert(0)'
        document.querySelector('footer').style.filter = 'invert(0)';
        theme = 'white';
    };
});



// Menu 
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