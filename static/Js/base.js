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