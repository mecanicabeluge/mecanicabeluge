document.getElementById('link-main').addEventListener('click', () => {
    $('.hero').animatescroll({scrollSpeed: 2000, padding: 0});
});

document.getElementById('link-hero').addEventListener('click', () => {
    $('.hero').animatescroll({scrollSpeed: 2000, padding: 0});
});

document.getElementById('link-services').addEventListener('click', () => {
    $('.services').animatescroll({scrollSpeed: 2000, padding: 70});
});

document.getElementById('link-questions').addEventListener('click', () => {
    $('.questions').animatescroll({scrollSpeed: 2000, padding: 70});
});

document.getElementById('link-contact').addEventListener('click', () => {
    $('.contact').animatescroll({scrollSpeed: 2000, padding: 70});
});

document.getElementById('link-arrow').addEventListener('click', () => {
    $('.services').animatescroll({scrollSpeed: 2000, padding: 70});
});

function showButtonFixed() {
    document.querySelector('.button-fixed').setAttribute('style', 'visibility: visible;');
}

setTimeout(showButtonFixed, 15000);
